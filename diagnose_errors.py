"""Read local diagnostic logs without making model requests: python3 diagnose_errors.py."""
import collections,json,os
from pathlib import Path
root=Path(os.environ.get('KNOWLEDGE_DATA_DIR',str(Path(__file__).resolve().parent/'data')))/'error-journal'
runs=[]
for path in sorted(root.glob('*.jsonl')):
    rows=[]
    for line in path.read_text().splitlines():
        try:rows.append(json.loads(line))
        except ValueError:continue # A writer may still be appending the final line.
    if not rows:continue
    end=next((r for r in reversed(rows) if r['event'] in ('run_failed','run_completed')),None)
    runs.append({'run_id':rows[0]['run_id'],'item_id':rows[0]['item_id'],'started':rows[0]['time'],'status':end['event'] if end else 'running','stage':end.get('stage') if end else rows[-1].get('stage'),'errors':end.get('errors',[]) if end else [],'log':path.name})
print(json.dumps({'counts':dict(collections.Counter(r['status'] for r in runs)),'runs':runs},ensure_ascii=False,indent=2))
