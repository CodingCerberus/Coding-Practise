function solve(s){
  
    let lCount = 0
    let uCount = 0
    
    for(i = 0; i < s.length; i++){
      if (s[i] === s[i].toLowerCase()){
        lCount++
      } else if (s[i] === s[i].toUpperCase()){
        uCount++
      }
    }
  
    return uCount > lCount ? s.toUpperCase() : s.toLowerCase()
    
  }