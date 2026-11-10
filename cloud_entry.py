"""Direct Python runtime. No Sites dependency and no automatic work in test mode."""
import argparse,os,pathlib,json,sqlite3,importlib.util,sys,datetime
os.umask(0o077)
ROOT=pathlib.Path(__file__).resolve().parent
os.environ.setdefault('KNOWLEDGE_DATA_DIR',str(ROOT/'data'))
def main():
 p=argparse.ArgumentParser();p.add_argument('command',choices=['init','preflight','serve','review','run']);p.add_argument('--paper',action='append',default=[])
 args=p.parse_args()
 if args.command=='preflight':
  modules={name:bool(importlib.util.find_spec(name)) for name in ('pypdf','pdfplumber','pypdfium2','PIL')}
  database=pathlib.Path(os.environ['KNOWLEDGE_DATA_DIR'])/'desk.sqlite3'
  if not database.is_file():p.error('Database not found. Import your private data, or run init for a new empty workspace; init is not a migration.')
  with sqlite3.connect(database.resolve().as_uri()+'?mode=ro',uri=True) as db:
   result={'integrity':db.execute('PRAGMA quick_check').fetchone()[0],'items':db.execute('SELECT count(*) FROM items').fetchone()[0],'dependencies':modules,'api_key_configured':bool(os.environ.get('SUMMARY_API_KEY')),'automatic_work_started':False}
  print(json.dumps(result));return
 import server as desk
 import cloud_secrets
 desk.SECRET_STORE=cloud_secrets
 if args.command=='init':
  desk.init()
  print(json.dumps({'initialized':True,'automatic_work_started':False,'data_migrated':False}));return
 if args.command=='serve':
  desk.init()
  http=desk.ThreadingHTTPServer(('127.0.0.1',int(os.environ.get('PORT','8765'))),desk.Handler)
  print('Private loopback preview; background workers disabled.',flush=True);http.serve_forever()
 elif args.command=='review':
  if not 1<=len(args.paper)<=2 or len(set(args.paper))!=len(args.paper):p.error('Select one or two distinct papers.')
  if not os.environ.get('SUMMARY_API_KEY'):p.error('Configure SUMMARY_API_KEY in the private environment first.')
  for iid in args.paper:
   with desk.conn() as db:row=db.execute('SELECT summary FROM items WHERE id=?',(iid,)).fetchone()
   if row is None:p.error('Unknown paper ID')
   if row['summary']:p.error('Select a paper without a report, to prove real generation without replacing a saved report.')
  for iid in args.paper:
   print(json.dumps({'paper':iid,'stage':'started','at':desk.now()}),flush=True)
   desk.review_pipeline(iid,defer_authors=True)
   with desk.conn() as db:report=db.execute('SELECT summary FROM items WHERE id=?',(iid,)).fetchone()[0]
   print(json.dumps({'paper':iid,'stage':'saved','report_bytes':len(report or ''),'at':desk.now()}),flush=True)
 elif args.command=='run':desk.main()
if __name__=='__main__':main()
