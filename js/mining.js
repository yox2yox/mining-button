//マイニング実行
function mining(body,nonce){
  var shaObj = new jsSHA("SHA-256", "TEXT");
  shaObj.update(body+nonce);
  var hash = shaObj.getHash("HEX");
  return hash;
}

//ハッシュ値のテスト
//hash:ハッシュ値 dif:難易度
function testhash(hash,dif){
  for (var i = 0; i < dif; i++) {
    if(hash[i]!=0){
      return false;
    }
  }
  return true;
}
