function order(words){
  
    words = words.split(' ')
    
    let ans = []
    
    for(i = 0; i < words.length; i++){
      for(j = 0; j < words.length; j++){
        if(words[j].includes(String(i + 1))){
          ans.push(words[j])
        }
      }
    }
    
    return ans.join(' ')
    
  }