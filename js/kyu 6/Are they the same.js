function comp(array1, array2){

    if(array1 == null || array2 == null){
      return false
    }
    
    for(i = 0; i < array1.length; i++){
      array1[i] = array1[i]**2
    }
  
    array1.sort()
    array2.sort()
    
    for(i = 0; i < array1.length; i++){
      if(array1[i] != array2[i]){
        return false
      }
    }
    
    return true  
    
  }