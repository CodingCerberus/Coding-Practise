function consecutive(arr) {
  
    let ans = 0
    arr = arr.sort((a, b)=> a - b)
    
    for(i = 0; i < arr.length - 1; i++){
      if(Math.abs(arr[i] - arr[i + 1]) <= 1){
        continue
      }
      ans += Math.abs(arr[i] - arr[i + 1]) - 1
    }
    
    return ans;
  }
