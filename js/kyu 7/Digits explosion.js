function explode(s) {
  
    s = s.split('')
    
    let ans = []
    
    for(i = 0; i < s.length; i++){
      let x = Number(s[i])
      
      for(j = 0; j < x; j++){
        ans.push(s[i])
      }
    }
   
    return ans.join('')
    
  }