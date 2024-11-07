function consonantCount(str) {
  
    let ans = 0
    
    let regex = /[bcdfghjklmnpqrstvwxyz]/
    
    str = str.toLowerCase()
    
    for(i = 0; i < str.length; i++){
      if(regex.test(str[i])){
        ans++
      }
    }
    
    return ans
    
  }
