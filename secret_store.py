"""macOS Keychain storage. Secrets never appear in subprocess arguments or files."""
import ctypes as c
import hashlib
import json
import os
from pathlib import Path

SECRET_FIELDS=('api_key','scholar_key','search_api_key')
RETIRED_FIELDS=('multi_agent_enabled','multi_agent_mode','agent_models','agent_explainer_key','agent_reviewer_key','agent_verifier_key')
class Keychain:
    def __init__(self):
        self.lib=c.CDLL('/System/Library/Frameworks/Security.framework/Security')
        self.cf=c.CDLL('/System/Library/Frameworks/CoreFoundation.framework/CoreFoundation')
        self.cf.CFRelease.argtypes=[c.c_void_p]
        self.lib.SecKeychainFindGenericPassword.argtypes=[c.c_void_p,c.c_uint32,c.c_char_p,c.c_uint32,c.c_char_p,c.POINTER(c.c_uint32),c.POINTER(c.c_void_p),c.POINTER(c.c_void_p)]
        self.lib.SecKeychainAddGenericPassword.argtypes=[c.c_void_p,c.c_uint32,c.c_char_p,c.c_uint32,c.c_char_p,c.c_uint32,c.c_void_p,c.POINTER(c.c_void_p)]
        self.lib.SecKeychainItemModifyAttributesAndData.argtypes=[c.c_void_p,c.c_void_p,c.c_uint32,c.c_void_p]
        self.lib.SecKeychainItemFreeContent.argtypes=[c.c_void_p,c.c_void_p]
    def access(self,account,value=None):
        service=b'com.lijunjie.knowledge-desk';account=account.encode();size=c.c_uint32();data=c.c_void_p();item=c.c_void_p()
        code=self.lib.SecKeychainFindGenericPassword(None,len(service),service,len(account),account,c.byref(size),c.byref(data),c.byref(item))
        try:
            if code not in (0,-25300):raise RuntimeError('无法访问 macOS 钥匙串，请解锁钥匙串并允许本地服务访问。')
            if value is None:
                if code:raise RuntimeError('钥匙串中的密钥不存在，请重新填写并保存。')
                return c.string_at(data,size.value).decode()
            raw=value.encode()
            result=self.lib.SecKeychainItemModifyAttributesAndData(item,None,len(raw),raw) if not code else self.lib.SecKeychainAddGenericPassword(None,len(service),service,len(account),account,len(raw),raw,None)
            if result:raise RuntimeError('密钥未保存：macOS 钥匙串拒绝访问。原配置未更改。')
        finally:
            if data:self.lib.SecKeychainItemFreeContent(None,data)
            if item:self.cf.CFRelease(item)

def account_for(path,key):
    return hashlib.sha256(str(Path(path).resolve()).encode()).hexdigest()[:24]+':'+key

def write_config(path,values,store=None):
    """Write secrets first; atomically replace config only after secure storage succeeds."""
    out={k:v for k,v in values.items() if k not in RETIRED_FIELDS}
    for key in SECRET_FIELDS:
        value=out.get(key,'')
        if value:
            store=store or Keychain();account=account_for(path,key)
            store.access(account,str(value));out[key]={'keychain':account}
    tmp=Path(path).with_suffix('.tmp')
    fd=os.open(tmp,os.O_WRONLY|os.O_CREAT|os.O_TRUNC,0o600)
    with os.fdopen(fd,'w') as f:json.dump(out,f,ensure_ascii=False,indent=2)
    os.chmod(tmp,0o600);os.replace(tmp,path)

def read_config(path,store=None):
    path=Path(path)
    if not path.exists():return {}
    values={k:v for k,v in json.loads(path.read_text()).items() if k not in RETIRED_FIELDS};legacy=False
    for key in SECRET_FIELDS:
        value=values.get(key,'')
        if isinstance(value,dict):
            if value.get('keychain')!=account_for(path,key):raise RuntimeError('密钥引用无效，请重新配置。')
            store=store or Keychain();values[key]=store.access(value['keychain'])
        elif value:legacy=True
    if legacy:write_config(path,values,store)
    return values
