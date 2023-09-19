function squares(x, n) {

    if(n < 1){
      return []
    } else if(n === 1){
      return [x]
    }
    
    let ans = [x]
    
    for(i = 0; i < n - 1; i++){
      ans.push(ans[i]*ans[i])
    }
    
    return ans
    
  }