"""Environment-owned credentials: never persist them in the migrated settings."""
import json,os,pathlib
SECRET_FIELDS=('api_key','scholar_key','search_api_key')
ENV={'api_key':'SUMMARY_API_KEY','scholar_key':'SCHOLAR_API_KEY','search_api_key':'SEARCH_API_KEY'}
def read_config(path,store=None):
 cfg=json.loads(pathlib.Path(path).read_text()) if pathlib.Path(path).exists() else {}
 for key,env in ENV.items():cfg[key]=os.environ.get(env,'')
 return cfg
def write_config(path,values,store=None):
 for key,env in ENV.items():
  if values.get(key,'')!=os.environ.get(env,''):
   raise ValueError('Manage API credentials in the private cloud environment settings, then restart the application. / 请在私有云端环境设置中修改密钥，然后重启应用。')
 out={k:v for k,v in values.items() if k not in SECRET_FIELDS}
 p=pathlib.Path(path);tmp=p.with_suffix('.tmp')
 fd=os.open(tmp,os.O_WRONLY|os.O_CREAT|os.O_TRUNC,0o600)
 with os.fdopen(fd,'w') as f:json.dump(out,f,ensure_ascii=False,indent=2)
 os.replace(tmp,p)
