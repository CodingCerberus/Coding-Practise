function isDivisible(){
  
    if(arguments.length === 1){
      return true
    }
    
    for(i = 1; i < arguments.length; i++){
      if(arguments[0] % arguments[i] !== 0){
        return false
      }
    }
    
    return true
    
  }
