function roundIt(n){
  
    let x = String(n).split('')
    let y = x.length
    let l = x.indexOf('.')
    let r = y - l - 1
    
    return r > l ? Math.ceil(n) :
           l > r ? Math.floor(n) : Math.round(n)
    
  }
