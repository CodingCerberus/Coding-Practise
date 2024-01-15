function partlist(arr) {
  
    let ans = []  
    
    for(i = 1; i < arr.length; i++){
      let temp = []
      temp.push((arr.slice(0, i)).join(' '))
      temp.push((arr.slice(-arr.length + i)).join(' '))
      
      ans.push(temp)
    }
    
    return ans
    
  }
