function spacey(array) {
  
    let ans = []
    
    for(i = 0; i < array.length; i++){
      ans.push(array.slice(0, 1 + i).join(''))
    }
    
    return ans
  }
