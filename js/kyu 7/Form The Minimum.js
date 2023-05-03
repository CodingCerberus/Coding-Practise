function minValue(values){
  
  let ans = [...new Set(values)]
  
  ans = ans.sort((a, b) => a - b)
  
  return Number(ans.join(''))
  
}
