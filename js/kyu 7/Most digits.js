function findLongest(arr){
  
  let ans = 0
  
  for(i = 0; i < arr.length; i++){
    if(String(arr[i]).length > String(ans).length){
      ans = arr[i]
    }
  }
  
  return ans
}Most digits
