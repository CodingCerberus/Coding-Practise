var filterLucky=x=>{
  
    let ans = []
    
    for(i = 0; i < x.length; i++){
      if(String(x[i]).includes('7')){
        ans.push(x[i])
      }
    }
    
    return ans
    
  }
