function  calculateAge(a, b) {
    if (a > b){
      if ((a - 1) == b){
        return "You will be born in 1 year."
      } else {
        return `You will be born in ${a - b} years.`
      }
    } else if (a < b){
      if ((a + 1) == b){
        return "You are 1 year old."
      } else {
        return `You are ${b - a} years old.`
      }
    } else if (a == b){
      return "You were born this very year!"
    }
  }