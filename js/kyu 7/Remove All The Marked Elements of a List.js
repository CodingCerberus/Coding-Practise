Array.prototype.remove_ = function(arr1, arr2){
  
    for(i = 0; i < arr1.length; i++){
      if(arr2.includes(arr1[i])){
        arr1.splice(i, 1)
        i--
      }
    }
    
    return arr1
    
  }