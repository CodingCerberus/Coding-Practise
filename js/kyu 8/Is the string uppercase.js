String.prototype.isUpperCase = function() {
    let capsCheck = true
    for (i = 0; i < this.length; i++){
      if(this[i] !== this[i].toUpperCase()){
        capsCheck = false
      }
    }
    return capsCheck
  }