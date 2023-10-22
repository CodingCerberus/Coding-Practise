function to_nato(words) {
  
    words = words.split('')
    
    for(i = 0; i < words.length; i++){
      console.log(words[i])
      if(NATO[words[i].toLowerCase()]){
        words[i] = NATO[words[i].toLowerCase()] + ' '
      } else if(words[i] == ' '){
        words[i] = ''
      } else {
        words[i] = words[i] + ' '
      }
    }
    
    words = words.join('')
    
    if(words.endsWith(' ')){
      words = words.slice(0, -1)
    }  
    
    return words
    
  }