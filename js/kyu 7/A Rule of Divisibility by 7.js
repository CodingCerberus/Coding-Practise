function seven(m) {
  
    if(m < 100){
      return [m, 0]
    }
    
    let ans = [0,0]
    
    for(i = 0; ;){ 
      ans[1]++
      m = String(m)
      let lastN = Number(m[m.length - 1])
      m = m.slice(0, -1)
      m = Number(m)
      m = m - (2 * lastN)
      
      if(m > 99){
        continue 
      }else{
        ans[0] = m
        break
      }
    }
    return ans
  }