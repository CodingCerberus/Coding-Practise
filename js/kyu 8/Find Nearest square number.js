function nearestSq(n){
  
  let sqrtN = Math.sqrt(n)
  
  if(Number.isInteger(sqrtN)){
    return n
  }
  
  let lower = Math.floor(sqrtN) ** 2
  let higher = Math.ceil(sqrtN) ** 2
  
  return (n - lower) > (higher - n) ? higher : lower
  
}
