function alternate(n, firstValue, secondValue){
  
    let ans = []
    
    for(i = 0; i < n; i++){
      if(i === 0 || i % 2 === 0){
        ans.push(firstValue)
      }else{
        ans.push(secondValue)
      }
    }
  
    return ans
  }
