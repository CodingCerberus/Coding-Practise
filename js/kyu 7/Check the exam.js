function checkExam(array1, array2) {
  
  let ans = 0
  
  for(i = 0; i < array1.length; i++){
    if (array1[i] == array2[i]){
      ans += 4
    } else if (array2[i] == ''){
      continue
    } else {
      ans--
    }
  }
  
  return ans < 0 ? 0 : ans
  
}
