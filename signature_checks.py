"""Independent layout extraction only for incomplete/ambiguous PDF signatures."""
import io

def cross_check(desk,raw,authors,primary):
    if primary and all(a.get('affiliation') for a in primary):
        return primary,{'path':'primary','used_fallback':False,'conflicts':[]}
    import pdfplumber
    with pdfplumber.open(io.BytesIO(raw)) as pdf:
        page=pdf.pages[0]
        # pdfminer/pdfplumber reconstructs lines from coordinates independently of pypdf.
        text=desk.safe_pdf_text(page.extract_text(x_tolerance=2,y_tolerance=3) or '')
        layout=desk.safe_pdf_text(page.extract_text(layout=True) or '')
    secondary=desk.pdf_author_records(raw,authors,text_override=text)
    byname={desk.paper_title_key(a['name']):a for a in secondary}
    out=[];conflicts=[]
    for a in primary or authors:
        b=byname.get(desk.paper_title_key(a['name']),{})
        one=a.get('affiliation','');two=b.get('affiliation','')
        if one and two and desk.paper_title_key(one)!=desk.paper_title_key(two):
            conflicts.append({'name':a['name'],'primary':one,'layout':two})
            # Retain previously stored evidence, but do not accept a conflicting new guess.
            old=next((x for x in authors if x['id']==a['id']),a)
            out.append(dict(old));continue
        if not one and two:
            b=dict(b);b['affiliation_evidence']={**b.get('affiliation_evidence',{}),'method':'independent-pdfplumber-layout'};out.append(b)
        else:out.append(a)
    return out,{'path':'layout-fallback','used_fallback':True,'conflicts':conflicts,'text':text[:16000],'layout':layout[:16000]}

def verify_proposals(desk,cfg,proposals,checks):
    """Check already marker-validated proposals against independent local PDF text."""
    import re
    normalize=lambda x:re.sub(r'\W+','',x).casefold()
    material=normalize(checks.get('text',''))
    valid=[]
    for a in proposals:
        quote=a.get('affiliation_evidence',{}).get('quote','')
        q=normalize(quote)
        units=[normalize(u) for u in a.get('affiliation','').split('; ') if u]
        if len(q)>=12 and q in material and normalize(a['name']) in q and units and all(u in q for u in units):
            valid.append({**a,'affiliation_evidence':{**a.get('affiliation_evidence',{}),'verification':'local-layout'}})
    return valid,{}
