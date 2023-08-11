function maxTriSum(num){
  
  num = [...new Set(num)].sort((a, b)=> b - a)
  
  return num[0] + num[1] + num[2]
  
}
