function findShort(s){
  s = s.split(' ')
  
  let ans = s[0].length
  
  for (i = 0; i < s.length; i++){
    if (s[i].length < ans){
      ans = s[i].length
    }
  }
  
  return ans
  
}
