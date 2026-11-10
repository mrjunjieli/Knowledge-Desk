"""Persistent delivery audit; historic gaps are unknown, never inferred as no matches."""
import datetime as dt,json

def initialize(desk):
    with desk.conn() as c:
        c.execute('CREATE TABLE IF NOT EXISTS delivery_runs(id TEXT PRIMARY KEY,day TEXT,started TEXT,finished TEXT,state TEXT,details TEXT)')
        c.execute("UPDATE delivery_runs SET state='interrupted',finished=? WHERE state='running'",(desk.now(),))

def history(desk):
    today=desk.now()[:10]
    with desk.conn() as c:
        rows=[dict(r) for r in c.execute("SELECT r.recommended_date,r.source_group,i.id,i.title,i.seen_at,i.status,i.starred,i.removed,i.feedback FROM recommendation_inbox r JOIN items i ON i.id=r.item ORDER BY r.recommended_date DESC,i.title")]
        added={r[0]:r[1] for r in c.execute("SELECT substr(added,1,10),count(*) FROM items WHERE workspace='research' AND kind='paper' GROUP BY 1")}
        runs=[dict(r) for r in c.execute('SELECT * FROM delivery_runs ORDER BY started')]
    dates=[r['recommended_date'] for r in rows]+list(added)+[r['day'] for r in runs]+[today]
    start=dt.date.fromisoformat(min(dates));end=dt.date.fromisoformat(today);out=[]
    for offset in range((end-start).days+1):
        day=(start+dt.timedelta(days=offset)).isoformat();papers=[]
        for r in rows:
            if r['recommended_date']!=day:continue
            papers.append({**r,'read':bool(r['seen_at'] or r['status']=='read')})
        day_runs=[{**r,'details':json.loads(r['details'])} for r in runs if r['day']==day]
        status=day_runs[-1]['state'] if day_runs else 'historical' if papers else 'unverified'
        if not day_runs and not papers and added.get(day):status='screening_unverified'
        read=sum(p['read'] for p in papers)
        out.append({'date':day,'total':len(papers),'read':read,'unread':len(papers)-read,'saved':sum(bool(p['starred']) for p in papers),'dismissed':sum(bool(p['removed']) or p['feedback']=='dislike' for p in papers),'candidates_added':added.get(day,0),'status':status,'papers':papers,'runs':day_runs})
    return list(reversed(out))

def collect(desk,fn,workspace):
    if workspace!='research':return fn(workspace)
    stamp=desk.now();run=desk.uid(stamp+str(__import__('time').time_ns()))
    with desk.conn() as c:c.execute('INSERT INTO delivery_runs VALUES(?,?,?,?,?,?)',(run,stamp[:10],stamp,'','running','{}'))
    details={}
    try:
        results=fn(workspace);details['sources']=results
        daily=desk.daily_recommendations()
        details.update(pending=daily['pending'],qualified=daily['qualified'],excluded=daily['excluded'])
        with desk.conn() as c:total=c.execute('SELECT count(*) FROM recommendation_inbox WHERE recommended_date=?',(stamp[:10],)).fetchone()[0]
        details['recommended_total']=total
        state='partial' if any(r.get('error') for r in results) else 'pending' if daily['pending'] else 'delivered' if total else 'empty'
        return results
    except Exception as exc:
        state='failed';details['error']=type(exc).__name__+': '+str(exc)[:500];raise
    finally:
        with desk.conn() as c:c.execute('UPDATE delivery_runs SET finished=?,state=?,details=? WHERE id=?',(desk.now(),state,json.dumps(details,ensure_ascii=False),run))

def should_run(desk,cfg):
    stamp=desk.now()
    if not cfg.get('auto_refresh') or stamp[11:16]<cfg['daily_time']:return False
    with desk.conn() as c:runs=[dict(r) for r in c.execute('SELECT * FROM delivery_runs WHERE day=? ORDER BY started',(stamp[:10],))]
    if not runs:return True
    if any(r['state'] in ('running','delivered','empty') for r in runs):return False
    if len(runs)>=3:return False
    last=dt.datetime.fromisoformat(runs[-1]['finished'] or runs[-1]['started'])
    return (dt.datetime.fromisoformat(stamp)-last).total_seconds()>=900
