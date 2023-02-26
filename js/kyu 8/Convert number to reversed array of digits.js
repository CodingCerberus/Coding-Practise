function digitize(n) {
    let answer = String(n).split("").reverse()
    for (i = 0; i < answer.length; i++){
      answer[i] = Number(answer[i])
    }
    return answer
  }