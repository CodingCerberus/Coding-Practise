function remove (string) {
  
  while(string.endsWith('!')){
    string = string.split('')
    string.pop()
    string = string.join('')
  }
  
  return string
  
}
