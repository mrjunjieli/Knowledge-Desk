"""Local, append-only diagnostics. Never persist request headers or reasoning traces."""
import datetime,functools,json,os,re,threading,time,uuid,traceback
from pathlib import Path
_local=threading.local()

def clean(value):
    text=json.dumps(value,ensure_ascii=False,default=str)
    for secret in getattr(_local,'secrets',set()):
        if secret:text=text.replace(secret,'[REDACTED]')
    text=re.sub(r'(?i)(Bearer\s+)[^\s"\\]+',r'\1[REDACTED]',text)
    return json.loads(text)

def event(kind,**details):
    path=getattr(_local,'path',None)
    if not path:return
    if details.get('stage'):_local.stage=details['stage']
    record=clean({'time':datetime.datetime.now().astimezone().isoformat(),'event':kind,'run_id':_local.run,'item_id':_local.item,**details})
    with open(path,'a',encoding='utf-8') as f:f.write(json.dumps(record,ensure_ascii=False)+'\n')

def errors(exc):
    chain=[];seen=set()
    while exc and id(exc) not in seen:
        seen.add(id(exc));chain.append({'type':type(exc).__name__,'message':str(exc)[:3000],'frames':[{'file':Path(f.filename).name,'line':f.lineno,'function':f.name} for f in traceback.extract_tb(exc.__traceback__)]})
        exc=exc.__cause__ or exc.__context__
    return chain

def tracked(root):
    def decorate(fn):
        @functools.wraps(fn)
        def run(iid,*args,**kwargs):
            folder=Path(root)/'error-journal';folder.mkdir(mode=0o700,parents=True,exist_ok=True)
            _local.run=uuid.uuid4().hex;_local.item=iid;_local.secrets=set();_local.stage='source'
            _local.path=folder/(_local.run+'.jsonl')
            fd=os.open(_local.path,os.O_CREAT|os.O_EXCL|os.O_WRONLY,0o600);os.close(fd)
            start=time.monotonic();event('run_started')
            try:
                result=fn(iid,*args,**kwargs);event('run_completed',elapsed_seconds=round(time.monotonic()-start,2));return result
            except Exception as exc:
                event('run_failed',stage=_local.stage,errors=errors(exc),elapsed_seconds=round(time.monotonic()-start,2));raise
            finally:_local.path=None;_local.secrets=set()
        return run
    return decorate

def call(request,cfg,payload):
    if not getattr(_local,'path',None):return request(cfg,payload)
    _local.secrets.update(str(v) for k,v in cfg.items() if ('key' in k.lower() or 'secret' in k.lower()) and isinstance(v,str) and v)
    stage=payload.get('_diagnostic_stage','auxiliary');_local.stage=stage
    call_id=uuid.uuid4().hex;start=time.monotonic()
    event('request_started',call_id=call_id,stage=stage,model=cfg.get('model'),protocol=cfg.get('api_protocol'),effort=cfg.get('api_effort'),max_tokens=payload.get('max_tokens'))
    try:
        raw=request(cfg,payload)
        try:
            response=json.loads(raw);choice=(response.get('choices') or [{}])[0]
            content=choice.get('message',{}).get('content','')
            details={'finish_reason':choice.get('finish_reason'),'usage':response.get('usage',{}),'content':content[:200000] if isinstance(content,str) else content}
            try:
                parsed=json.loads(re.sub(r'^```(?:json)?\s*|\s*```$','',content.strip()))
                details['returned_keys']=list(parsed) if isinstance(parsed,dict) else None
                if isinstance(parsed,dict):details['returned_parts']=[s.get('part') for s in parsed.get('sections',parsed.get('report_sections',[])) if isinstance(s,dict)]
            except (ValueError,TypeError,AttributeError):details['parse_status']='invalid_json'
        except (ValueError,TypeError,AttributeError):details={'parse_status':'invalid_response_envelope'}
        event('response_received',call_id=call_id,stage=stage,elapsed_seconds=round(time.monotonic()-start,2),**details)
        return raw
    except Exception as exc:
        event('request_failed',call_id=call_id,stage=stage,elapsed_seconds=round(time.monotonic()-start,2),errors=errors(exc));raise
