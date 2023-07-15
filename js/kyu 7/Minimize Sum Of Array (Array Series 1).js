function minSum(arr) {
  
  arr = arr.sort((a, b) => a - b)
  
  let ans = 0
  
  for(i = 0; i < (arr.length / 2); i++){
    ans += arr[i] * arr[arr.length - 1 - i]
  }
  
  return ans
  
}
