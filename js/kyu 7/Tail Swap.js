function tailSwap(arr) {
  
    arr[1] = arr[1].split(':')
    arr[0] = arr[0].split(':')
    
    return [`${arr[0][0]}:${arr[1][1]}`, `${arr[1][0]}:${arr[0][1]}`]
  }
