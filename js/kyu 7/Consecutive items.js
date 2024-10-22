function consecutive(arr, a, b) {
  
    for(i = 0; i < arr.length - 1; i++){
      if(arr[i] === a){
        if(arr[i + 1] === b){
          return true
        }
      }
    }
    
      for(i = 0; i < arr.length - 1; i++){
      if(arr[i] === b){
        if(arr[i + 1] === a){
          return true
        }
      }
    }
    
    return false
  }
