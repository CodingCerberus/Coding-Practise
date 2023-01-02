function SeriesSum(n){
    let result = 0
    let divider = 1
    for (i = 1; i <= n; i++){
      result += 1/divider
      divider += 3
    }
    return result.toFixed(2)
  }