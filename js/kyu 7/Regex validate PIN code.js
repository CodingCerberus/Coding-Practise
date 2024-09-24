function validatePIN (pin) {
  
    let regex = /^(?=[0-9]*$)(?:.{4}|.{6})$/
    
    return regex.test(pin)
    
  }
