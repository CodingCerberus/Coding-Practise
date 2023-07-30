function closeCompare(a, b, margin){
  
  if(!margin){
    return a < b ? -1 :
           a > b ? 1 : 0
  }
  
  return ((a < b - margin) || (a > b + margin)) ? 0 :
         a < b ? -1 : 1
  
}
