function digPow(n, p){
  
    let sum = 0
    let nSplit = String(n).split('')
    
    for(i = 0; i < nSplit.length; i++){
      sum += Number(nSplit[i])**(p + i)
    }  
    
    return sum % n === 0 ? sum / n : -1
    
  }