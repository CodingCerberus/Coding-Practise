function oddOrEven(array) {
  
  if(array === []){
    return true
  }
  
  return ((array.reduce((a, b) => a + b, 0)) % 2 ) === 0 ? "even" : "odd"
  
}
