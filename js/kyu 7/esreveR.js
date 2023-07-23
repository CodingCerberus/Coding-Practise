reverse = function(array) {
  
   let newArr = []
   
   for(i = 0; i < array.length; i++){
     newArr.unshift(array[i])
   }
  
  return newArr
  
}
