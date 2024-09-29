function save(sizes, hd) {
  
    let ans = 0
    let filledSpace = 0
  
    for(i = 0; i < sizes.length; i++){
      if(filledSpace + sizes[i] > hd){
        break
      }
      
      filledSpace += sizes[i]
      ans++  
      
    } 
    
    return ans
    
  }
