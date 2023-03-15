function wave(str){
  str = str.toLowerCase()
  let l = str.length
  let ans = []
  
  
  for(i = 0; i < l; i++){
    if(str[i] == ' '){
      continue
    } else {
    let strarr = str.split('')
    strarr[i] = strarr[i].toUpperCase()
    strarr = strarr.join('')
    ans.push(strarr)
      }
  }
  
  return ans
}