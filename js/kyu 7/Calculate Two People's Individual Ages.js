function getAges(sum, diff){
  
    if(sum < 0 || diff < 0){
      return null
    }
    
    let a = (sum - diff)/2
    let b = sum - a
    
    if(a < 0 || b < 0){
      return null
    }
    
    return a > b ? [a, b] : [b, a]
    
  };
