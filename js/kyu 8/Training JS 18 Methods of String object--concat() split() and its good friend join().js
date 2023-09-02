function splitAndMerge(str, sep) {
  
  str = str.split(' ')
  
  for(i = 0; i < str.length; i++){
    str[i] = str[i].split('').join(sep)
  }
  
  return str.join(' ')  
  
}