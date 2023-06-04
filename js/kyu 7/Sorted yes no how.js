function isSortedAndHow(array) {
  
  let copyA = array.map(x => x)
  
  if(array === copyA.sort((a, b)=> a - b)){
    return 'yes, ascending'
  } else if (array === copyA.sort((a, b)=> b - a)){
    return 'yes, descending'
  } else {
    return 'no'
  }
  
}
