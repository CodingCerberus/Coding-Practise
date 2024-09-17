function evenLast(numbers) {
  
    let summer = 0
    
    for(i = 0; i < numbers.length; i++){
      if(i % 2 == 0){
        summer += numbers[i]
      }
    }  
    
    return numbers === undefined || numbers.length == 0 ? 0 : summer * numbers[numbers.length - 1]
    
  }
