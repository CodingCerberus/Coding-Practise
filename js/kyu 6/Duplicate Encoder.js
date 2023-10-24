function duplicateEncode(word){
  
    word = word.toLowerCase().split('')
    
    let ans = []
    
    for(i = 0; i < word.length; i++){
      let counter = word.filter((x)=> x == word[i]).length
      
      if (counter > 1){
        ans.push('\)')
      }else{
        ans.push('\(')
      }
    }
    
    return ans.join('')
    
  }