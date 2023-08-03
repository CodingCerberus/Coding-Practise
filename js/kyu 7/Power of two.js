function isPowerOfTwo(n){
   if(n == 1){
     return true
   }
  
  if(n == 0){
    return false
  }
  
  while(n > 1){
    if(n / 2 == 1){
      return true
    }
    
    if(n % 2 != 0){
      return false
    }
    
    n = n / 2
  }
  
  
}
