function factorial(n){
    if (n == 0){
      return 1
    }
    
    let ans = 1
    
    for (i = 1; i <= n; i++){
      ans *= i
    }
    
    return ans
  }