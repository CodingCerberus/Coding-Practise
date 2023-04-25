function rowWeights(arr){
  let ans = [0, 0]
  
  for (i = 0; i < arr.length; i++){
    if(i % 2 === 0){
      ans[0] += arr[i]
    } else {
      ans[1] += arr[i]
    }
  }
  
  return ans
}Row Weights
