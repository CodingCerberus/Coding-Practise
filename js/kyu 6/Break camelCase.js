function solution(str) {
    str = str.split('')
  
  for(i = 0; i < str.length - 1; i++){
    if((str[i] === str[i].toLowerCase()) && (str[i + 1] === str[i + 1].toUpperCase())){
      str.splice(i + 1, 0, " ")
      i++
    }
  }
  
  return str.join('')
}