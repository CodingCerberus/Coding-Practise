function alternateCase(s) {
  
    s = s.split('')
    
    for(i = 0; i < s.length; i++){
      if(s[i] == s[i].toLowerCase()){
        s[i] = s[i].toUpperCase()
      } else {
        s[i] = s[i].toLowerCase()
      }
    }
    
    return s.join('')
    
  }
