function getCount(str) {
  
  str = str.toLowerCase().split('')
  
  let ans = 0
  
  for(i = 0; i < str.length; i++){
    if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
      ans++
    }
  }
  
  return ans
  
}
