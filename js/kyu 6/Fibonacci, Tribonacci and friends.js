function Xbonacci(sig, n){
  
    if(n < sig.length){
      return sig.slice(0, n)
    }
    
    let sigL = sig.length
    
    for(i = 0; sig.length < n; i++){
  
      sig.push(sig.slice(-sigL).reduce((a, b)=> a + b, 0))
      
    }
    
    return sig
    
  }
