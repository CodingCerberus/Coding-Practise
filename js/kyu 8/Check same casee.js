function sameCase(a, b){
  
  if((/[A-Za-z]/.test(a) == false) || (/[A-Za-z]/.test(b) == false)){
    return -1
  }
  
  if((a == a.toUpperCase() && b == b.toUpperCase()) || (a == a.toLowerCase() && b == b.toLowerCase())){
    return 1
  }
    
  return 0
    
}
