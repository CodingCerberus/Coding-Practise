String.prototype.vowel = function() {
  
    if(this.length !== 1){
      return false
    }
    
    let regex = /[aeiou]/i
    
    if(regex.test(this)){
      return true
    }
    
    return false;
  };
