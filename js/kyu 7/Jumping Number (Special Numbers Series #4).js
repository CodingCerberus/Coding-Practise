function jumpingNumber(n){
    if (n < 10){
      return "Jumping!!"
    }
    
    n = String(n).split('')
    
    for(i = 1; i < n.length; i++){
      if(Math.abs(Number(n[i]) - Number(n[i - 1])) != 1){
        return "Not!!"
      }
    }
    
    return "Jumping!!"
    
  }