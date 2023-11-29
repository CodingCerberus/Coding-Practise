function count(string) {
  
    let arr = string.split('')
    
    let ans = {}
  
    for(i = 0; i < arr.length; i++){
      if(arr[i] in ans){
        ans[arr[i]]++
      }else(
      ans[arr[i]] = 1)
    }
    
    return ans
  }