function nbDig(n, d) {
    let arr = []
    let count = 0
      for(i = 0; i <= n; i++){
        arr.push(i**2)
      }
    
    arr = String(arr.join(''))
    
    for(i = 0; i < arr.length; i++){
      if (arr[i] == d){
        count++
      }
    }
    
    return count
  }