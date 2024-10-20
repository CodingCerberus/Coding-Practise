function moveTen(s){

    s = s.split('')
    
    for(i = 0; i < s.length; i++){
      s[i] = s[i].charCodeAt()
      s[i] += 10
      if(s[i] > 122){
        s[i] -= 26
      }
      s[i] = String.fromCharCode(s[i])
    }
  
   return s.join('')
    
  }
