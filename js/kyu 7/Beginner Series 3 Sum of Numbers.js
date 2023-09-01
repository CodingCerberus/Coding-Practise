function getSum( a,b ){
    if (a == b){
      return a
    } else if (a > b){
      let result = 0
      for (i = b; i <= a; i++){
        result += i
        }
      return result
      } else {
      let result = 0
      for (i = a; i <= b; i++){
        result += i
        }
      return result
      }
    
    }
