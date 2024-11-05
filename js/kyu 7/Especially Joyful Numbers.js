function numberJoy(n) {
  
    let sumN = String(n).split('')
    let ans = 0
  
    for(i = 0; i < sumN.length; i++){
      ans+= Number(sumN[i])
    }
    
    let ansR = Number(String(ans).split('').reverse('').join(''))
    
    return ans * ansR === n
    
  }
