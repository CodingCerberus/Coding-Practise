function tidyNumber(n){
  
  n = String(n)
  
  for(i = 0; i < n.length - 1; i++){
    if(n[i] <= n[i + 1]){
      continue
    }else{
      return false
    }
  }
  
  return true
  
}
