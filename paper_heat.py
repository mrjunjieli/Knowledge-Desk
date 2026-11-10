"""Transparent HF engagement snapshots, not scientific quality scores."""
import math

def snapshot(row, fetched_at):
    paper=row.get('paper') or {}
    def count(value):
        return value if type(value) is int and value>=0 else None
    votes=count(paper.get('upvotes'));comments=count(row.get('numComments'))
    score=None if votes is None or comments is None else round(80*min(1,math.log1p(votes)/math.log1p(100))+20*min(1,math.log1p(comments)/math.log1p(20)))
    return {'score':score,'upvotes':votes,'comments':comments,'fetched_at':fetched_at,'source_url':'https://huggingface.co/papers/'+str(paper.get('id','')),'formula_version':'hf-engagement-v1'}
