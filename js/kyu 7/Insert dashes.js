function insertDash(num) {
  
    let regex = /[13579]/
    
    num = num.toString().split('')
    console.log(num)
  
    
    for(i = 0; i < num.length - 1; i++){
      if(regex.test(num[i]) && regex.test(num[i + 1])){
        num.splice(i + 1, 0, '-')
        i++
        }
      }
    
      return num.join('')
    
  }
