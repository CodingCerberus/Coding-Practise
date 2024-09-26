function eachCons(array, n) {
  
    let ans = []
  
    for(i = 0; i < array.length - n + 1; i++){
      ans.push(array.slice(i, i + n))
    }
    
      return ans
  }
