function pillars(numPill, dist, width) {
  
  if(numPill == 1){
    return 0
  }
  
  if(numPill == 2){
    return dist * 100
  }
  
  return ((numPill - 2) * width) + (((numPill - 1) * dist) * 100)
  
}
