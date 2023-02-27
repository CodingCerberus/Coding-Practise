function removeSmallest(numbers) {
    if (numbers == []){
      return []
    }
    
    let min = Math.min(...numbers)
    let answer = numbers.map((x) => x)
  
    for(i = 0; i < answer.length; i++){
      if (answer[i] == min){
        answer.splice(i, 1)
        break
      }
    }
    return answer
  }