function findEvenIndex(arr){
  
    for(i = 0; i < arr.length; i++){
      let left = 0 + arr.slice(0, i).reduce((a, b)=> a + b, 0)
      let right = 0 + arr.slice(i + 1).reduce((a, b)=> a + b, 0)
      
      if(left == right){
        return i
      }  
    }
    
    return -1
  }
