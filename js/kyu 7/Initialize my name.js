function initializeNames(name){
  
    name = name.split(' ')
    
    if(name.length == 1){
      return name[0]
    }else if(name.length == 2){
      name = name.join(' ')
      return name
    }
    
    for(i = 1; i < name.length - 1; i++){
      name[i] = name[i][0] + '.'
    }
    
    return name.join(' ')
    
  }
