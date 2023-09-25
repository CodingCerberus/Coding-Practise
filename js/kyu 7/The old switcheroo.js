function vowel2index(str) {
  
    str = str.split('')
    
    for(i = 0; i < str.length; i++){
      if(str[i] == 'A' || str[i] == 'a' ||str[i] == 'E' ||str[i] == 'e' ||str[i] == 'I' ||str[i] == 'i' ||str[i] == 'O' ||str[i] == 'o' ||str[i] == 'U' ||str[i] == 'u'){
        str[i] = String(i + 1)
      }
    }
    
    return str.join('')
    
  }