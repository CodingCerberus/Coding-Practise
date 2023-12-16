function stringMerge(s1, s2, letter){
  
    return s1.slice(0, s1.indexOf(letter)) + s2.slice(s2.indexOf(letter), s2.length)
    
  }
