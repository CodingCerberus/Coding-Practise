function sumOfN(n) {
  
    let ans = new Array(Math.abs(n) + 1)
    
    ans[0] = 0
    
    for(i = 1; i < ans.length; i++){
      if(n > 0){
      ans[i] = ans[i - 1] + i
        }else if(n < 0){
      ans[i] = ans[i - 1] - i
        }
    }
    
    return ans
  };