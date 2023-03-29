function roundToNext5(n){
    console.log(n)
    return n % 5 === 0 ? n :
           n < 0 ? n - (n % 5) :
           n + (5 - (n % 5))
  }