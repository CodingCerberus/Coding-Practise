//P: number
//R: -1 if n != a square number, else, return the next perfect square number
//E: 121, returns 144. 120 returns -1
//P: math sqrt, if decimals, return -1 else return result +1**

function findNextSquare(sq) {
    if (Number.isInteger(Math.sqrt(sq))){
      return ((Math.sqrt(sq)) + 1)**2
    } else {
      return -1
    }
  }