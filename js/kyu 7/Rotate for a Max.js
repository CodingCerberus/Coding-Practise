function maxRot(n) {
  
    let ans = n
    
    for(i = 0; i < String(n).length; i++){
      n = String(n).split('')
      
      n.push(n[i])
      
      n.splice(i, 1)
      
      n = Number(n.join(''))
      
     if(n > ans){
        ans = n
      } 
    }
    
    return ans
    
  }