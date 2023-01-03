function gimme (t) {
    let maxx = Math.max(...t)
    let minn = Math.min(...t)
    let answer = 0
    for(i = 0; i < t.length; i++){
      if ((t[i] != maxx) && (t[i] != minn)){
        answer = i
      }
    }
    return answer
  }