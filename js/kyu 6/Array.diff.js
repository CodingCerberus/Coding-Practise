function arrayDiff(a, b) {
  
    for(i = 0; i < a.length; i++){
      for(j = 0; j < b.length; j++){
       
        if(a[i] == b[j]){
          a.splice(i, 1)
          i--
        }
      }
    }
    
    return a
    
  }