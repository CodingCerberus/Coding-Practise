function generateShape(I){

  let b = ''
  let ans = ''
  
  for (i = 0; i < I; i++){
    b += '+'
  }
  
    for (i = 0; i < I; i++){
      ans += `${b}\n`
  }
  
  return ans.slice(0, ans.length - 1)
  
}
