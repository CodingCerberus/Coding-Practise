function sameCase(a, b){
  
  if(typeof a == 'number' || typeof b == 'number'){
    return -1
  }
  
  return (a === a.toLowerCase() && b === b.toLowerCase()) || (a === a.toUpperCase() && b === b.toUpperCase()) ? 1 : 0
}
