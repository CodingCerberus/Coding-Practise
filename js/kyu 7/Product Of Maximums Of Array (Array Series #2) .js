function maxProduct(nums, s){
  
    nums = nums.sort((a, b)=> b - a).slice(0, s)
    
    return nums.reduce((a, b)=> a * b, 1)
    
  }