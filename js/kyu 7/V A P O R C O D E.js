function vaporcode(str) {
 
    str = str.split(' ')
    
    for(i = 0; i < str.length; i++){
      
      str[i] = str[i].toUpperCase()
      
      str[i] = str[i].split('').join('  ')
    
    }
    
    return str.join('  ')
    
  }