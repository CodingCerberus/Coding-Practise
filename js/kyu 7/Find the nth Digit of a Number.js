var findDigit = function(num, nth){
    
  let ans = String(Math.abs(num)).split('').reverse()
  
  return ans.length < nth ? 0 : nth < 1 ? -1 : Number(ans[nth -1])
  
}
