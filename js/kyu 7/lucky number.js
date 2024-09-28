function isLucky(n) {
  
    n = n.toString().split('')
    
    let ans = n.reduce((a, b)=> Number(a) + Number(b), 0)
    
    return ans === 0 ? true :
           ans % 9 === 0 ? true : false
    
  }
