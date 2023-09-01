function sumDigits(num) {
  
  num = String(num).split('')
  
  let ans = 0
  
  for(i = 0; i < num.length; i++){
    if(num[i] == '-'){
      continue
    }
    ans += Number(num[i])
  }
  
  return ans
  
}
