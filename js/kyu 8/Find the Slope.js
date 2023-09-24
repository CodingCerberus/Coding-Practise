function slope(p){
  
    if((p[2] - p[0]) == 0){
      return 'undefined'
    }
    
    return String((p[3] - p[1])/(p[2] - p[0]))
  
  }