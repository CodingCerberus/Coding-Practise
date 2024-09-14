function swap (string) {
  
    string = string.split('')
    
    let pattern = /[aeiou]/
    
    for(i = 0; i < string.length; i++){
      if(pattern.test(string[i])){
        string[i] = string[i].toUpperCase()
      }
    }
    
    return string.join('')
    
  }
