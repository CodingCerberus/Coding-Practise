function disariumNumber(n){
  
    let ans = 0
    
    for(i = 0; i < String(n).length; i++){
    
      ans += Number(String(n)[i]) ** (i + 1)
    
    }
    
    return n == ans ? 'Disarium !!' : 'Not !!'
    
  }