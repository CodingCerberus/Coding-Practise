function first(arr, n) {
  
  console.log(arr)
  console.log(n)
  
  if(n){
    if(n == 0){
      return []
    }
    
    return [...arr.slice(0, n)]
    
  }
  
  return [arr[0]]
  
}
