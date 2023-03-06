function capitalize(s){
    let answer = s.toLowerCase().split('')
    let answer2 = s.toLowerCase().split('')
    
    for(i = 0; i < s.length; i++){
      if (i % 2 == 0){
        answer[i] = answer[i].toUpperCase()
      }
    }
    
    for(i = 0; i < s.length; i++){
      if (i % 2 == 1){
        answer2[i] = answer2[i].toUpperCase()
      }
    }
    
    return [answer.join(''), answer2.join('')]
    
  };