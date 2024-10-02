function fiveLine(s){
  
    s = s.trim()
    
    let ans = s
    
    for(i = 2; i < 6; i++){
      ans += '\n'
      for(k = 0; k < i; k++){
        ans += s
      }
    }
    
    return ans
    
  }
