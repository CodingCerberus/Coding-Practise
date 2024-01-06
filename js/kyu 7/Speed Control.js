function gps(s, x) {
  
    if(x.length <= 1){
      return 0
    }
    
    let ans = []
  
    for(i = 1; i < x.length; i++){
      ans.push(((x[i] - x[i - 1]) * 3600)/s)
    }
    
    return Math.floor(Math.max(...ans))
    
  }
