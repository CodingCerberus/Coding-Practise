function finalGrade (e, p) {
    if (e > 90 || p > 10){
      return 100
    } else if (e > 75){
      return p > 4 ? 90 :
             p > 1 ? 75 : 0
    } else if (e > 50){
      return p > 1 ? 75 : 0
    } else {
      return 0
    }
  }