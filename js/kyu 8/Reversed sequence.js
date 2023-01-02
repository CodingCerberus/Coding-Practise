const reverseSeq = n => {
    let newArr = []
    for (i = 1; i <= n; i++){
      newArr.unshift(i)
    }
    return newArr
  };