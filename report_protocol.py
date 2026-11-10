"""Conservative structured report decoding and content-addressed stage checkpoints."""
import copy,hashlib,json,os,re,uuid
from pathlib import Path

class Pairs(list):pass

def decode(text):
    text=re.sub(r'^```(?:json)?\s*|\s*```$','',text.strip())
    # Escape only backslashes rejected by the JSON decoder. Never guess missing prose.
    for _ in range(2000):
        try:raw=json.loads(text,strict=False,object_pairs_hook=Pairs);break
        except json.JSONDecodeError as exc:
            if exc.msg=='Extra data' and text.startswith('{') and exc.pos>0 and text[:exc.pos].rstrip().endswith('}') and re.match(r',\s*"[^"\\]+"\s*:',text[exc.pos:]):
                # One premature root close before remaining named fields. Parse the
                # entire repaired document; never discard trailing content.
                repaired=text[:exc.pos].rstrip()[:-1]+text[exc.pos:]
                raw=json.loads(repaired,strict=False,object_pairs_hook=Pairs)
                break
            if exc.msg!='Invalid \\escape':raise
            text=text[:exc.pos]+'\\'+text[exc.pos:]
    else:raise ValueError('Too many invalid escapes')
    def convert(x):
        if isinstance(x,Pairs):
            keys=[k for k,v in x]
            if len(set(keys))!=len(keys):
                # Known provider defect: repeated section records inside one object.
                if keys.count('part')>1 and set(keys)<= {'part','title','markdown'}:
                    records=[];record={}
                    for k,v in x:
                        if k=='part' and record:records.append(record);record={}
                        if k in record:raise ValueError('Ambiguous duplicate section fields')
                        record[k]=convert(v)
                    records.append(record)
                    if any(set(r) not in ({'part','markdown'},{'part','title','markdown'}) for r in records):raise ValueError('Incomplete repeated section record')
                    return records
                # Repeated section arrays are safe only when their part IDs do not overlap.
                duplicates={k for k in keys if keys.count(k)>1}
                if duplicates <= {'report_sections','sections'}:
                    out={};seen={}
                    for k,v in x:
                        value=convert(v)
                        if k in duplicates:
                            if not isinstance(value,list):raise ValueError('Repeated sections must be arrays')
                            seen.setdefault(k,set());out.setdefault(k,[])
                            for section in value:
                                if not isinstance(section,dict) or type(section.get('part')) is not int:raise ValueError('Invalid repeated section')
                                if section['part'] in seen[k]:raise ValueError('Conflicting repeated section part')
                                seen[k].add(section['part']);out[k].append(section)
                        else:out[k]=value
                    return out
                raise ValueError('Duplicate JSON fields')
            out={k:convert(v) for k,v in x}
            for key in ('sections','report_sections'):
                if isinstance(out.get(key),list):out[key]=[r for entry in out[key] for r in (entry if isinstance(entry,list) else [entry])]
            return out
        if isinstance(x,list):return [convert(v) for v in x]
        if isinstance(x,str):
            if re.search(r'[\x00-\x08\x0b\x0c\x0e-\x1f]',x):raise ValueError('Ambiguous control character in report text')
            for equation in re.findall(r'\$\$[\s\S]*?\$\$|(?<!\$)\$[^$]*\$(?!\$)',x):
                if '\t' in equation or '\r' in equation:raise ValueError('Possible unescaped LaTeX command')
        return x
    result=convert(raw)
    if not isinstance(result,dict):raise ValueError('Report must be a JSON object')
    return result

def validate(value,schema):
    typ=schema.get('type')
    if typ=='object':
        if not isinstance(value,dict):raise ValueError('Expected object')
        missing=set(schema.get('required',[]))-set(value)
        if missing:raise ValueError('Missing fields: '+','.join(sorted(missing)))
        # Provider schemas request only known fields, but extra answer metadata is
        # harmless. Preserve it; still validate every required field and section.
        for key,child in schema.get('properties',{}).items():
            if key in value:validate(value[key],child)
    elif typ=='array':
        if not isinstance(value,list):raise ValueError('Expected array')
        for child in value:validate(child,schema.get('items',{}))
    elif typ=='string' and not isinstance(value,str):raise ValueError('Expected nonempty text')
    elif typ=='number' and (type(value) not in (int,float) or not __import__('math').isfinite(value)):raise ValueError('Expected finite number')
    elif typ=='boolean' and type(value) is not bool:raise ValueError('Expected boolean')
    elif typ=='integer' and type(value) is not int:raise ValueError('Expected integer')
    if 'minimum' in schema and value<schema['minimum']:raise ValueError('Number below minimum')
    if 'maximum' in schema and value>schema['maximum']:raise ValueError('Number above maximum')
    if 'enum' in schema and value not in schema['enum']:raise ValueError('Invalid enum')

def request_with_checkpoints(request,folder,event=lambda *a,**kw:None):
    folder=Path(folder);folder.mkdir(parents=True,exist_ok=True,mode=0o700)
    def call(cfg,payload):
        schema=payload.get('_output_schema');stage=payload.get('_diagnostic_stage')
        if not schema or not stage:return request(cfg,payload)
        signature={k:cfg.get(k) for k in ('model','base_url','ai_engine','api_protocol','api_effort','api_reasoning_mode','api_effort_mapping','codex_effort','codex_model')}
        key=hashlib.sha256(json.dumps({'version':3,'config':signature,'payload':payload},sort_keys=True,ensure_ascii=False).encode()).hexdigest()
        path=folder/(key+'.json')
        if path.exists():
            event('checkpoint_reused',stage=stage,checkpoint=key)
            return path.read_bytes()
        usage=[];working=copy.deepcopy(payload)
        for attempt in range(2):
            # Transport errors are not blindly replayed: provider may have billed them.
            response=json.loads(request(cfg,working));usage.append(response.get('usage',{}))
            try:
                choice=response['choices'][0]
                if choice.get('finish_reason') not in (None,'stop'):raise ValueError('Output truncated: '+str(choice.get('finish_reason')))
                original=choice['message']['content'];result=decode(original);validate(result,schema)
                if stage=='screening':
                    records=result['screenings']
                    if sorted(r['id'] for r in records)!=sorted(payload['_expected_ids']):raise ValueError('Screening IDs missing or duplicated')
                    if any(not r['reason'].strip() or not r['reason_en'].strip() for r in records):raise ValueError('Bilingual screening reason missing')
                parts=result.get('sections',result.get('report_sections'))
                if stage in ('reviewer','explainer'):
                    expected=list(range(5,10)) if stage=='reviewer' else payload.get('_expected_parts')
                    if expected and (not isinstance(parts,list) or sorted(s.get('part',0) for s in parts)!=expected):raise ValueError('Required sections: '+str(expected))
                if isinstance(parts,list) and any(not str(s.get('markdown','')).strip() for s in parts if isinstance(s,dict)):raise ValueError('Empty report section')
                if stage=='translation' and any(not isinstance(result[k],str) or not result[k].strip() for k in schema.get('required',[])):raise ValueError('Empty translated section')
                for field,markers in payload.get('_protected_tokens',{}).items():
                    if any(result[field].count(marker)!=1 for marker in markers):raise ValueError('Protected equation/URL placeholder missing or repeated')
                choice['message']['content']=json.dumps(result,ensure_ascii=False)
                try:changed=json.loads(original)!=result
                except ValueError:changed=True
                if changed:event('output_normalized',stage=stage)
                response['usage']={**response.get('usage',{})}
                for field in ('prompt_tokens','completion_tokens','total_tokens'):
                    if all(isinstance(u.get(field),int) for u in usage):response['usage'][field]=sum(u[field] for u in usage)
                # Cache only public answer and usage, never reasoning traces or headers.
                saved={'choices':[{'finish_reason':'stop','message':{'content':choice['message']['content']}}],'usage':response['usage'],'model':response.get('model',cfg.get('model'))}
                data=json.dumps(saved,ensure_ascii=False).encode();tmp=folder/(key+'.'+uuid.uuid4().hex+'.tmp')
                fd=os.open(tmp,os.O_WRONLY|os.O_CREAT|os.O_EXCL,0o600)
                with os.fdopen(fd,'wb') as f:f.write(data)
                os.replace(tmp,path);event('checkpoint_saved',stage=stage,checkpoint=key);return data
            except (ValueError,KeyError,TypeError) as exc:
                event('output_validation_failed',stage=stage,attempt=attempt+1,reason=str(exc))
                if attempt:raise
                working=copy.deepcopy(payload)
                working['max_tokens']=min(32768,max(24000,2*payload.get('max_tokens',12000)))
                if 'Output truncated:' in str(exc):
                    working['messages'].append({'role':'user','content':'The output budget was exhausted. Keep every required section and evidence, but shorten repetitive explanations and quotations. Do not repeat the same finding in multiple sections. Return a complete concise report within the output budget.'})
                working['messages'].append({'role':'user','content':'The previous response failed machine validation: '+str(exc)+'. Regenerate the complete requested JSON from the supplied source. Each section must be a separate object in the array. No duplicate keys. Encode literal backslashes and embedded double quotes according to JSON syntax. Do not omit sections or invent evidence. Return only JSON.'})
        raise AssertionError('unreachable')
    return call
