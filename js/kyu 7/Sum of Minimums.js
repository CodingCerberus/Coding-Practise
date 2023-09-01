function sumOfMinimums(arr) {
  
  let ans = 0
  
  for (i = 0; i < arr.length; i++){
    ans += Math.min(...arr[i])
  }
  
  return ans
  
}
