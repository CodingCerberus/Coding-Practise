String.prototype.isLetter = function() {
  
    let regex = /[a-z]/i
    
    if(this.length !== 1){
      return false
    }  
    
    return regex.test(this)
    
  }
