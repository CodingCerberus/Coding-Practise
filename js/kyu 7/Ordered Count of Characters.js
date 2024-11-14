const orderedCount = function (text) {
  
    text = text.split('')
    let ans = [...new Set(text)]
    let ans2 = []
    
    for(i = 0 ; i < ans.length; i++){
      let count = 0
      
      for(k = 0; k < text.length; k++){
        if(text[k] === ans[i]){
          count++
        }
      }
      
      ans2.push([ans[i], count])
      
    }
    
    return ans2
    
  }
