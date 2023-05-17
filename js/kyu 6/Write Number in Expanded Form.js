function expandedForm(num) {
  
  num = String(num)
  let ans = ''
  
  for(i = 1; i <= num.length; i++){
    
    if(num[i - 1] == 0){
      continue
    }
    
    if(i === num.length){
      ans += `${Number(num[i - 1]) * 10 ** (num.length - i)}`
    } else {
    
    ans += `${Number(num[i - 1]) * 10 ** (num.length - i)} + `
    }
  }
  
  if(ans.endsWith(' + ')){
    ans = ans.split('')
    ans.pop()
    ans.pop()
    ans.pop()
    ans = ans.join('')
  }
  
  return ans
}
