function mxdiflg(a1, a2) {
  
  if ((a1.length === 0) || (a2.length === 0)){
    return -1
  }
  
  for(i = 0; i < a1.length; i++){
    a1[i] = a1[i].length
  }
  
  for(i = 0; i < a2.length; i++){
    a2[i] = a2[i].length
  }
  
  let res1 = Math.max(...a1) - Math.min(...a2)
  let res2 = Math.max(...a2) - Math.min(...a1)
  
  return res1 > res2 ? res1 : res2
  
}
