function isIsogram(str){
    str = str.toLowerCase().split('')
    let check = [...new Set(str)]
    
    return check.length === str.length
  }