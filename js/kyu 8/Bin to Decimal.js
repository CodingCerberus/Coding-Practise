function binToDec(bin){
  
    if (Math.random() > 0.5){
    
    let answer = 0
    for(i = 0; i < bin.length; i++){
      if (bin[i] == 1){
      answer += 2 ** (bin.length - i - 1)
        }
    }
    return answer
    } else {
    return parseInt(bin, 2)
      }
  }