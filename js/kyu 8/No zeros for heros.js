function noBoringZeros(n) {
    if (n == 0){
      return 0
    } else {
        do {
          if (n % 10 == 0){
            n = n / 10
          }
        } while (n % 10 == 0)
          return n
      }
    }