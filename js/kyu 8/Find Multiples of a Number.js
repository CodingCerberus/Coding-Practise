function findMultiples(int, limit) {
    let answer = []
    let i = 1
    while(i * int <= limit){
      answer.push(i * int)
      i++
    }
    return answer
  }