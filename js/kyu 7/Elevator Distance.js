function elevatorDistance(arr) {
  
    let ans = 0;
    
    for(i = 1; i < arr.length; i++){
      if(arr[i] > arr[i - 1]){
        ans += arr[i] - arr[i - 1]
      } else {
        ans += arr[i - 1] - arr[i]
      }
    }
    
    return ans
    
  }
