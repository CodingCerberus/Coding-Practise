function getNumberFromString(s) {
  
    s = s.split('')
    let ans = []
    let regex = /[0-9]/
    
    for(i = 0; i < s.length; i++){
      if(regex.test(s[i])){
        ans.push(s[i])
      }
    }
    
    return Number(ans.join(''))
    
  }
