function sumOfIntegersInString(s) {
  
    let regex = /[A-Za-z.+=:;,?!#\[\]\(\)§%]/
    
    s = s.split(regex)
    
    let ans = 0
    
    s = s.reduce((a, b)=> Number(a) + Number(b), 0)
    
    return s
    
  }
