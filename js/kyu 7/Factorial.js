function factorial(n){
    let sum = 1
    if (n == 0){
      return 1
    } else if (n > 12 || n < 0){
      throw RangeError
    }
    for (i = n; i > 1; i--){
      sum *= i
    }
    return sum
  }