function billboard(name, price = 30){
  
    let ans = 0
    
    for(i = 0; i < name.length; i++){
      ans += price
    }
    
    return ans
  
  } 