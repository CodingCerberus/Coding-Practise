function balancedNum(number){
  
  let lSum = 0 
  let rSum = 0
  number = String(number).split('')
  for(i = 0; i < number.length; i++){
    number[i] = Number(number[i])    
  }
  let l = number.length

  console.log(l)
  for(i = 0; i < l; i++){
    if(i < ((l / 2) -1)){
      
      lSum += number[i]
    }
    
    if(i > (l / 2)){
      rSum += number[i]
    }
  }  
  
  return l < 3 ? 'Balanced' : 
         lSum == rSum ? 'Balanced' : 'Not Balanced'
        
}
