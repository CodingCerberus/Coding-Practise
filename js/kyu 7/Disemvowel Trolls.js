function disemvowel(str) {
  
    str = str.split('')
  
    for(i = 0; i < str.length; i++){
      if(str[i].match(/[aeiou]/i)){
        str[i] = ''
      }
    }
    
    return str.join('')
    
  }