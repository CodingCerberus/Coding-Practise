function bigToSmall(arr){
  
    arr = arr.flat().sort((a, b)=> b - a)
    
    return arr.join('>')
    
  }
