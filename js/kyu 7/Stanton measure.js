function stantonMeasure(arr){
  
    let n = 0
    
    for(i = 0; i < arr.length; i++){
      if(arr[i] == 1){
        n++
      }
    }
    
    let ans = 0
    
    for(i = 0; i < arr.length; i++){
      if(arr[i] == n){
        ans++
      }
    }
    
    return ans
    
  }
