function twoSum(numbers, target) {
  
    let ans = [ , ]
    
    for(i = 0; i < numbers.length - 1; i++){
      for(j = i + 1; j < numbers.length; j++){
        if(numbers[i] + numbers[j] == target){
          ans[0] = i
          ans[1] = j
          return ans
        }
      }
    }
    
  }