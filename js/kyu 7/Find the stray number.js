function stray(nums) {
  
  let a = nums[0]
  let b = nums[1]
  let c = nums[2]
  
  let multi = 0
  
  if(a == b || a == c){
    multi = a
  } else if(b == c){
    multi = b
  }
  
  for(i = 0; i < nums.length; i++){
    if(nums[i] != multi){
      return nums[i]
    }
  }
  
}
