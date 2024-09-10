function toFreud(string) {
  
    if(string == ""){
      return ""
    }
    
    string = string.split(' ')
    for(i = 0; i < string.length; i++){
      string[i] = 'sex'
    }
  
    return string.join(' ')
    
  }
