function array(string) {
  
  string = string.split(',')
  
  if(string.length < 3){
    return null
  }
  
  string.pop()
  string.shift()
  
  return string.join(' ')
  
}
