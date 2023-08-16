function reverse(str){
  
  if(str == '   '){
    return ''
  } 
  
  str = str.split(' ')
  
  for(i = 0; i < str.length; i++){
    if(i == 0 || i  % 2 == 0){
      continue
    }
    str[i] = str[i].split('').reverse().join('')
  }
  
  return str.join(' ')  
  
}
