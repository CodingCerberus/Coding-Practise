function numberToPower(number, power){
  
  let ans = number
  
  if(power == 0){
    return 1
  }
  
  for(i = 0; i < power - 1; i++){
    ans *= number
  }
  
  return ans
}
