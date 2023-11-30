function sortArray(arr) {
  
    let odds = []
    let oddPos = []
    
    for(i = 0; i < arr.length; i++){
      if(Math.abs(arr[i] % 2) == 1){
        odds.push(arr[i])
        oddPos.push(i)
      }
    }
    
    odds = odds.sort((a, b)=> a - b)
    for(i = 0; i < odds.length; i++){
      arr[oddPos[i]] = odds[i]    
    }
    return arr
    
  }