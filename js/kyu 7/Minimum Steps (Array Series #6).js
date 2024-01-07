function minimumSteps(nums, v){
  
    nums = nums.sort((a, b)=> a - b)
    
    let sum = nums[0]
    let count = 0
    
    if(sum >= v){
      return count
    }
    
    for(i = 1; i < nums.length; i++){
      if(sum >= v){
        break
      }
      
      sum += nums[i]
      count++
    }
    
    return count
    
  }
