function balancedNum(number){
  
  console.log(number)
  
  let l = number.length
  number = String(number).split('')
  for(i = 0; i < number.length; i++){
    number[i] = Number(number[i])    
  }
  
  
  
  if(l < 4){
  var leftNum = number.slice(0, Math.floor(l / 2))
  var rightNum = number.slice(-(Math.floor(l / 2)))
  } else if(l % 2 == 0){
      var leftNum = number.slice(0, Math.floor(l / 2) - 1)
      var rightNum = number.slice(-(Math.floor(l / 2)-1))
  } else if(l % 2 == 1){
      var leftNum = number.slice(0, Math.floor(l / 2))
      var rightNum = number.slice(-(Math.floor(l / 2)))
  }

  console.log(leftNum)
  console.log(rightNum)
  
  
  
  
  
  
  return l < 3 ? 'Balanced' :
         leftNum.reduce((a, b)=> a + b, 0) == rightNum.reduce((a, b)=> a + b, 0) ? 'Balanced' : 'Not Balanced'
  
}
