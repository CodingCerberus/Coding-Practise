function minMax(arr){
    let profitArr = []
    profitArr.push(Math.min(...arr));
    profitArr.push(Math.max(...arr));
    return profitArr
  }