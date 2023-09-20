function largestPairSum (nums) {
  
    nums = nums.sort((a, b) => b - a)
    
    return nums[0] + nums[1]  
    
  }