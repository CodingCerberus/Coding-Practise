function longestWord(stringOfWords) {
  
    stringOfWords = stringOfWords.split(' ') 
    
    let x = 0
    let ans = 0
    
    for(i = 0; i < stringOfWords.length; i++){
      if(stringOfWords[i].length >= x){
        x = stringOfWords[i].length
        ans = i
      }
    }
    
    return stringOfWords[ans]
    
  }
