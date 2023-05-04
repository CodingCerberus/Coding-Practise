function longestConsec(strarr, k) {
  
  if(strarr === 0 || k > strarr.length || k <= 0){
    return ''
  }
  
  let long = 0
  let arrI = 0
  
  for(i = 0; i < (strarr.length - k + 1); i++){
    let tempNum = 0
    
    for(j = 0; j < k; j++){
      tempNum += strarr[i + j].length
    }
    
    if(tempNum > long){
      long = tempNum
      arrI = i
    }
  }
  
  let ans = ''
  
  for(l = 0; l < k; l++){
    ans += strarr[arrI + l]
  }
  
  return ans
}
