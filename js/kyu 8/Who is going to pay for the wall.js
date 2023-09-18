function whoIsPaying(name){
  
    if(name.length < 3){
    return [name]
    }else{
      return [name, `${name[0]}${name[1]}`]
    }
    
  }