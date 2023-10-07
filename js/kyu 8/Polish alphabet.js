function correctPolishLetters (str) {
  
    str = str.split('')
    
    for(i = 0; i < str.length; i++){
      if(str[i] == 'ą'){
        str[i] = 'a'
      }else if(str[i] == 'ć'){
        str[i] = 'c'
      }else if(str[i] == 'ę'){
        str[i] = 'e'
      }else if(str[i] == 'ł'){
        str[i] = 'l'
      }else if(str[i] == 'ń'){
        str[i] = 'n'
      }else if(str[i] == 'ó'){
        str[i] = 'o'
      }else if(str[i] == 'ś'){
        str[i] = 's'
      }else if(str[i] == 'ź'){
        str[i] = 'z'
      }else if(str[i] == 'ż'){
        str[i] = 'z'
      }
    }
    
    return str.join('')
    
  }