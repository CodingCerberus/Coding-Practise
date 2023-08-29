function encode(str) {
  str = str.split('')
  
  for(i = 0; i < str.length; i++){
    if(str[i] == 'a'){
      str[i] = '1'
    } else if(str[i] == 'e'){
      str[i] = '2'
    } else if(str[i] == 'i'){
      str[i] = '3'
    } else if(str[i] == 'o'){
      str[i] = '4'
    } else if(str[i] == 'u'){
      str[i] = '5'
    }
  }
  return str.join('')
}

function decode(str) {
  str = str.split('')
  
  for(i = 0; i < str.length; i++){
    if(str[i] == '1'){
      str[i] = 'a'
    } else if(str[i] == '2'){
      str[i] = 'e'
    } else if(str[i] == '3'){
      str[i] = 'i'
    } else if(str[i] == '4'){
      str[i] = 'o'
    } else if(str[i] == '5'){
      str[i] = 'u'
    }
  }
  return str.join('')
}
