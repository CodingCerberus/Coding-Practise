function addLength(str) {
    let arr = str.split(' ')
    for(i = 0; i < arr.length; i++){
      arr[i] += ` ${arr[i].length}`
    }
    return arr
  }