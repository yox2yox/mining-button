self.addEventListener('message', function(e){
  importScripts(e.data.url+'/sha.js');
  importScripts(e.data.url+'/sha256.js');
  importScripts(e.data.url+'/mining.js');
  let hash="";
  let nonce=0;
  do{
    hash=mining(e.data.body,nonce);
    nonce++;
  }while(!testhash(hash,e.data.dif));
  let result = {
    hash : hash,
    nonce : nonce,
    body : e.data.body+nonce
  };
  postMessage(result);
});
