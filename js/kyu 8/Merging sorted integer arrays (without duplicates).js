function mergeArrays(a, b) {
  
    let ans = [...new Set(a.concat(b))]
    
    return ans.sort((a, b)=> a - b)  
    
  }
