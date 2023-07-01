function adjacentElementsProduct(array) {
  
  let ans = array[0] * array[1]
  
  for(i = 0; i < array.length - 1; i++){
    if(array[i] * array[i + 1] > ans){
      ans = array[i] * array[i + 1]
    }
  }
  
  return ans
  
}
