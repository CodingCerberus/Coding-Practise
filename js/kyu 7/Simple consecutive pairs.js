function pairs(ar){
  
    let ans = 0
    
    for(i = 0; i < ar.length; i++){
      if(i == 0 || i % 2 == 0){
        if(ar[i + 1] == ar[i] + 1 || ar[i + 1] == ar[i] - 1){
          ans++
        }
      }
    }
  
    return ans
  };