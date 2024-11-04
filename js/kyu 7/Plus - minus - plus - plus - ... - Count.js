function catchSignChange(arr) {
  
    let ans = 0
    
    for(i = 0; i < arr.length - 1; i++){
      if(arr[i] > -1){
        if(arr[i + 1] < 0){
          ans++
        }
      }
      
      if(arr[i] < 0){
        if(arr[i + 1] > -1){
          ans++
        }
      }  
    }
    
    return ans
    
  }
