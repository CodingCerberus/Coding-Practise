function lowercaseCount(str){
  let ans = 0
  for(i = 0; i < str.length; i++){
    if (str[i].match(/[a-z]/g)){
      ans ++
    }
  }
  
  return ans
}
