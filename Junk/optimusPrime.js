var optimusPrime = function(x){
  if(x===1){
    return "I pity the fool that thinks this is a prime number!";
  }else if (x ===2){
    return "This baby is prime, prime, prime!";
  }else{
    for(i = 2; i < x; i++){
      if(x % i === 0){
        return "I pity the fool that thinks this is a prime number!";
      }
    }
  }
  return "This baby is prime, prime, prime!";
}
