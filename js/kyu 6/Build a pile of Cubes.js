function findNb(m) {
  
    let ans = 0
  
    for(i = 1; m > 0; i++){
      m = m - (i ** 3)
      ans++
      
      if(m == 0){
        return ans
      }
      
      if(m < 0){
        return -1
      }
    }
  }