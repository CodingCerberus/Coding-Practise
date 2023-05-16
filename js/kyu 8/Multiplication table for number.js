function multiTable(number) {
  
  let ans = ''
  
  for(i = 1; i < 11; i++){
    i === 10 ? ans += `${i} * ${number} = ${i * number}` :
    ans += `${i} * ${number} = ${i * number}\n`
  }
  
  return ans
  
}
