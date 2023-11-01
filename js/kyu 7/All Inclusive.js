function containAllRots(strng, arr) {
  
    if (strng == ''){
      return true
    }
    
    for(i = 0; i <= strng.length; i++){
      strng = strng.split('')
      strng.push(strng[0])
      strng.splice(0, 1)
      strng = strng.join('')
      
      if(arr.includes(strng) == false){
      return false
      }
    }
    
    return true
    
  }