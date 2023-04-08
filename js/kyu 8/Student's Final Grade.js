function finalGrade (e, p) {
    if (e > 90){
      return p > 10 ? 100 :
             p >= 5 ? 90  :
             p >= 2 ? 75  : 0
    } else if (e > 75){
      return p >= 5 ? 90 :
             p >= 2 ? 75 : 0
    } else if (e > 50){
      return p >= 2 ? 75 : 0
    } else {
      return 0
    }
  }