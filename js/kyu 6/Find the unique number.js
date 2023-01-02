///array is sliced to reduce size for very long arrays
///then called only once to make a small Object to get the different values for max and min

function findUniq(arr) {
    const cake = arr.slice(0, 3);
    let settled = [...new Set(arr)]
    
    let a = Math.min(...settled);
    let b = Math.max(...settled);
    
    let x = cake[0]
    let y = cake[1]
    let z = cake[2]
    
    if ((x == a)&&(y == a)){
      return b
    } else if ((x == b)&&(y == b)){
      return a
    } else if ((y == a)&&(z == a)){
      return b
    } else if ((y == b)&&(z == b)){
      return a
    } else if ((x == a)&&(z == a)){
      return b
    } else {
      return a
    }
  }