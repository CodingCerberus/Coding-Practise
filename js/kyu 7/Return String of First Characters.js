function makeString(s){
  
    let conC = []
    let abr = s.split(' ')
    
    for(i = 0; i < abr.length; i++){
      conC.push(abr[i][0])
    }
    
    return conC.join('')
    
  }
