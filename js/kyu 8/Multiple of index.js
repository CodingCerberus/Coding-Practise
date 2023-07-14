function multipleOfIndex(arr) {
  
  let ans = []
  
  if(arr[0] === 0){
    ans.push(0)
  }
  
  for(i = 1; i < arr.length; i++){
    
    if(arr[i] % i === 0){
      ans.push(arr[i])
    }
  }

  return ans
  
}
