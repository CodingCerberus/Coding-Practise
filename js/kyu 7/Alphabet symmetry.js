function solve(arr){
  
    let ans = new Array(arr.length)
    ans.fill(0)
    
    
    for(i = 0; i < arr.length; i++){
      arr[i] = arr[i].toLowerCase()
      
      for(j = 0; j < arr[i].length; j++){
        if(j == arr[i].charCodeAt(j) - 97){
          ans[i]++
        }
      }
    }
    
    return ans
    
  };