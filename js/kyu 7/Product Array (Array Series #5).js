function productArray(nums){
  
    let ans = []
    
    for(i = 0; i < nums.length; i++){
      let temp = 1
      for(j = 0; j < nums.length; j++){
        if(j == i){
          continue
        }else{
          temp *= nums[j]
        }
      }
      ans.push(temp)
    }
    
    return ans
    
  }