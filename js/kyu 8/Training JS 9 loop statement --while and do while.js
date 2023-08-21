function padIt(str,n){
  
  let ans = [str]
  let i = 0
  
  do{
    i % 2 == 0 ? ans.unshift('*') : ans.push('*')
    i++
  } while (i < n)
  
    return ans.join('')
    
}
