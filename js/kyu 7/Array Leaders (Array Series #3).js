function arrayLeaders(nums){
  
    let ans = []
    
    for(i = 0; i < nums.length - 1; i++){ 
      
      let sumR = nums.slice(i + 1).reduce((a, b) => a + b, 0)
      
      if(nums[i] > sumR){
        ans.push(nums[i])
      }
    }
    
    if(nums[nums.length-1] > 0){
      ans.push(nums[nums.length-1])
    }  
    
    return ans
    
  }