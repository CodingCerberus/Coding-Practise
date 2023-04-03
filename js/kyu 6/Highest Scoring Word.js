function high(sent){
    let pointArr = [["a", 1], ["b", 2], ["c", 3], ["d", 4], ["e", 5], ["f", 6], ["g", 7], ["h", 8], ["i", 9], ["j", 10], ["k", 11], ["l", 12], ["m", 13], ["n", 14], ["o", 15], ["p", 16], ["q", 17], ["r", 18], ["s", 19], ["t", 20], ["u", 21], ["v", 22], ["w", 23], ["x", 24], ["y", 25], ["z", 26]]
  
    let start = 0
    let ans = ""
    sent = sent.split(' ')
    
    //word iterator
    for(i = 0; i < sent.length; i++){
      
      let currentScore = 0
      
      //letter iterator
      for(j = 0; j < sent[i].length; j++){
        
        //letter vs pointArr
        for(k = 0; k < pointArr.length; k++){
          if (pointArr[k][0] === sent[i][j]){
            currentScore += pointArr[k][1] 
          }  
          
        }
        
      }
       
      if (currentScore > start){
        start = currentScore
        ans = sent[i]
      }
    }
    
    return ans
  }