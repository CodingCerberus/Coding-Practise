function hydrate(s) {
  
    s = s.split(' ')
    
    let ans = 0
    
    for(i = 0; i < s.length; i++){
      if(Number(s[i]) > 0){
        ans+= Number(s[i])
      }
    }
    
    return ans == 1 ? "1 glass of water" : ans + " glasses of water"
    
  }
