function arithmeticSequenceElements(a, d, n) {
  
    let ans = String(a)
    
    for(i = 1; i < n; i++){
      ans += ', ' + (a + (d * i))
    }  
    
    return ans
    
  }
