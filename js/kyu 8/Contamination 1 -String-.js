function contamination(text, char){
  
  return text.split('').fill(char, 0, text.length).join('')
  
}
