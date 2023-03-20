function XO(str) {
    str = str.toLowerCase().split('')
    let xCount = 0
    let oCount = 0
    
    for(i = 0; i < str.length; i++){
      if (str[i] === "x"){
        xCount++
        continue
      } else if (str[i] === "o"){
        oCount++
      }
    }
    
    return xCount === oCount
  }