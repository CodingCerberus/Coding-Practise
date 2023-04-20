function sumMul(n,m){
  if (n == 0 || m <= 0){
    return 'INVALID'
  }
  
  let i = 1
  let ans = 0
  do{
    ans += n * i
    i++
  } while (n * i < m)
    
    return ans
}