function toCsvText(array) {
  
  let ans = ''
  
  for(i = 0; i < array.length; i++){
    ans += `${array[i].join(',')}\n`
  }
  
  return ans.slice(0, ans.length - 1)
  
}
