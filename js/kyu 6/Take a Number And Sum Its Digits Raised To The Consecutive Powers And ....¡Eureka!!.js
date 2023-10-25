function sumDigPow(a, b) {
   
    let ans = []
    
    while(a <= b){
      let holder = 0
      let sA = String(a).split('')
      for(i = 1; i < String(a).length + 1; i++){
        holder += sA[i - 1] ** i
      }
      if (holder == a){
        ans.push(a)
      }
      a++
    }
    
    return ans
    
  }