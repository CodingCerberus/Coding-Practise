String.prototype.toJadenCase = function () {
  
    let str = this.split(' ')
    
    for(i = 0; i < str.length; i++){
      str[i] = str[i].split('')
      str[i][0] = str[i][0].toUpperCase()
      str[i] = str[i].join('')
    }
    
    return str.join(' ')
    
  };