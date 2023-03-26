multiplicationTable = function(size) {
    let answer = []
    for (i = 1; i <= size; i++){
      let newRow = []
        
        for(j = 1; j <= size; j++){
          newRow.push(i * j)
        }
      
      answer.push(newRow)
    }
    return answer
  }