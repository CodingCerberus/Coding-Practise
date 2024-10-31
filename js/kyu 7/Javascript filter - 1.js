function searchNames( logins ){
  
    let regex = /_$/
    
    return logins.filter(x => regex.test(x[0]) || regex.test(x[1]))
    
  }
