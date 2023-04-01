function sumOfDifferences(arr) {
  let ans = 0
  arr = arr.sort((a, b) => b - a)
  
  for(i = 0; i < arr.length - 1; i++){
    ans += arr[i] - arr[i + 1]
  }
  
  return ans
}