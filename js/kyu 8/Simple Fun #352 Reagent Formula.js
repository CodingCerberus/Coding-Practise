function isValid(formula){
  
    console.log(formula)
    
    if(formula.includes(1) && formula.includes(2)){
      return false
    }
    
    if(formula.includes(3) && formula.includes(4)){
      return false
    }
    
    if(formula.includes(5)){
      if(!formula.includes(6)){
        return false
      }
    }
    
    if(formula.includes(6)){
      if(!formula.includes(5)){
        return false
      }
    }
    
    if(formula.includes(7)){
      return true
    }
    
    if(formula.includes(8)){
      return true
    }
    
    if(formula.length < 2){
      return false
    }
    
    return true
    
  }
