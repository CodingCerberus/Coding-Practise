function findChildren(danc) {
  
    let ans = danc.toLowerCase().split('').sort()
    let p = [...new Set(ans)]
    
    
    for(i = 0; i < danc.length; i++){
      
      if(p != []){
      
      if(ans[i] == p[0]){
        ans[i] = ans[i].toUpperCase()
        p.shift()
        
      }
     } 
    }
    
    return ans.join('')
  
  }
