function stringTransformer(str) {
  
    str = str.split('')
    
    for(i = 0; i < str.length; i++){
      if(str[i] === str[i].toLowerCase()){
        str[i] = str[i].toUpperCase()
      }else if(str[i] === str[i].toUpperCase()){
        str[i] = str[i].toLowerCase()
      }
    }
    
    str = str.join('').split(' ').reverse()
    
    return str.join(' ')
    
  }