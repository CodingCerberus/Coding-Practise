function getGrade (s1, s2, s3) {
    let averageG = (s1 + s2 + s3)/3;
    if (averageG < 60){
      return "F"
    } else if (averageG < 70){
      return "D"
    } else if (averageG < 80){
      return "C"
    } else if (averageG < 90){
      return "B"
    } else if (averageG <= 100){
      return "A"
    }
  }