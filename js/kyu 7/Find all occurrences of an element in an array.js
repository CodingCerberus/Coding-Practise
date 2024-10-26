const findAll = (array, n) => {
  
    let ans = []
    
    for(i = 0; i < array.length; i++){
      if(array[i] === n){
        ans.push(i)
      }
    }
    
    return ans
    
  }
