function stairsIn20(s){
  
  let ans = 0
  
  for(i = 0; i < s.length; i++){
    ans += s[i].reduce((a, b) => a + b, 0)
  }
  
  return ans * 20
  
}
