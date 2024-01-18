function bouncingBall(h,  bounce,  window) {
  
    if(h <= 0 || bounce >= 1 || bounce <= 0 || window >= h){
      return -1
    }
    
    let ans = 1
    
    h = h * bounce
    
    while(h > window){
      ans += 2
      h = h * bounce
    }
    
    return ans
  }
