function compare(s1, s2) {
  
    let s1Sum = 0
    let s2Sum = 0
    
    if(s1 != '' && s1 != null){
      s1 = s1.toUpperCase()
    for(i = 0; i < s1.length; i++){
      if(s1.charCodeAt(i) < 65 || s1.charCodeAt(i) > 90){
        s1Sum = 0
        break
      }
      s1Sum += s1.charCodeAt(i)
    }
  }
    
    if(s2 != '' && s2 != null){
      s2 = s2.toUpperCase()
    for(i = 0; i < s2.length; i++){
      if(s2.charCodeAt(i) < 65 || s2.charCodeAt(i) > 90){
        s2Sum = 0
        break
      }
      s2Sum += s2.charCodeAt(i)
    }
  }
    
    return s2Sum == s1Sum ? true : false
  
  }
