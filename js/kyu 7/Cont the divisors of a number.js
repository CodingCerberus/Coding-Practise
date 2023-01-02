function getDivisorsCnt(n){
    let factors = 0
      for(i = 1; i <= n; i++){
        if(n % i == 0){
          factors++
        }
      }
    return factors
  }