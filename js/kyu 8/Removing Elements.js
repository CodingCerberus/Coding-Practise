function removeEveryOther(arr){
  
  let ans = []

  for(i = 0; i < arr.length; i++){
    if(i % 2 === 0){
      ans.push(arr[i])
    }
  }
  
  return ans
}
