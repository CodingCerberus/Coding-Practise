function expressionMatter(a, b, c) {
    let ans = a + b + c
    
    if (((a + b) * c) > ans){
      ans = ((a + b) * c)
    }
    
    if ((a * (b + c)) > ans){
      ans = a * (b + c)
    }
    
    if (a * b * c > ans){
      ans = a * b * c
    }
    
    return ans
  }