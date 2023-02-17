function doubleChar(str) {
    let answer = ''
    
    for (i = 0; i < str.length; i++){
      answer += str[i]
      answer += str[i]
    }
    
    return answer
  }