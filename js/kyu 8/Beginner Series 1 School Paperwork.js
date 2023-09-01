//P: times n by m, both numbers, can be negative
//R: result, or 0 if n or m is < 0
//E: n= 5, m=5: 25, n=-5, m=5:  0
//P: check negatives, then return

function paperwork(n, m) {
    if ((n < 0) || (m < 0)){
      return 0
    } else {
      return n * m
    }
  }
