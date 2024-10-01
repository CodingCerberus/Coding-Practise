function removeParentheses(s){
  
    s = s.split('')
    
    let start = -1
    let end = -1
    
    for(i = 0; i < s.length; i++){
      if(s[i] === '\('){
        start = i
      }
      
      if(s[i] === '\)'){
        end = i
        if(start > -1){
          s.splice(start, end - start + 1)
          i = -1
        }
      }
      
    }
    
    return s.join('')
    
  }
