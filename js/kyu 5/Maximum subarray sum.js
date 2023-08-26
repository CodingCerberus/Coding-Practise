var maxSequence = function(arr){
  if(arr == []){
    return 0
  }
  
  let ans = 0
  
  for(i = 0; i < arr.length; i++){ 
    for(j = 0; j <= arr.length ;j++){
      
      let temp = arr.slice(i, arr.length - 1 - j).reduce((a, b)=> a + b)
      
      console.log(arr.slice(i, arr.length - 1 - j))
      console.log(temp)
      
      if(temp > ans){
        ans = temp
      }
      
      
    }
  }
  
  return ans
}
