function remove(s,n){
  
   s = s.split('')
  
  for (i = 0; i < s.length; i++){
    if ((s[i]) === '!' && (n > 0)){
      s.splice([i], 1)
      i--
      n--
    }
  }
  
  return s.join('')
  
}
