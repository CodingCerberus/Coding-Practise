function remove (str) { 
    str = str.split('')
  
    if(str[str.length - 1] == "!"){
      str.pop()
      str = str.join('')
      return str
    }
    return str.join('')
  }
