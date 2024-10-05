function maxGap (numbers){
  
    numbers = numbers.sort((a, b)=> b - a)
    
    let ans = 0
    
    for(i = 0; i < numbers.length; i++){
      let a = numbers[i] - numbers[i + 1]
      
    if(a > ans){
      ans = a
    }
    }
    
    return ans
    
  }
