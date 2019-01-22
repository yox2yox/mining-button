self.addEventListener('message', function(e){
  importScripts('sha.js');
  importScripts('sha256.js');
  importScripts('mining.js');
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
