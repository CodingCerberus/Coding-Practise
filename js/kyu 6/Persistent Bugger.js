function persistence(num) {
  
    let ans = 0
    
    while(num > 9){
      num = String(num).split('')
      let start = Number(num[0])
      
      for(i = 1; i < num.length; i++){
        start *= Number(num[i])
      }
      
      num = start
      
      ans++
    } 
    
    return ans
    
  }