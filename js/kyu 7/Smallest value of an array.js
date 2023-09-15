function min(arr, toReturn) {
  
    let ans = Math.min(...arr)
    
    if(toReturn == 'index'){
      return arr.indexOf(ans)
    }
    
    return ans  
    
  }