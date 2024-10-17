function calc(x){

    let total1 = ''
    
    for(i = 0; i < x.length; i++){
      total1 += String(x[i].charCodeAt())
    }
    
    let regex = /7/g
    
    let total2 = total1.replaceAll(regex, "1")
    
    let ans1 = 0
    let ans2 = 0
    
    for(i = 0; i < total1.length; i++){
      ans1 += Number(total1[i])
      ans2 += Number(total2[i]) 
    }
    
    return ans1 - ans2
    
  }
