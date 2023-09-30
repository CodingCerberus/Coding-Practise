function incrementer(nums) {
  
    for(i = 0; i < nums.length; i++){
      nums[i] += i + 1
      
      if(nums[i] > 9){
        nums[i] = Number(String(nums[i]).split('').pop())
      }
    }  
    
    return nums
    
  }