function divisibleByThree(str){

    str = str.split('')
    
    let ans = 0
    
    for(i=0; i<str.length; i++){
      ans += Number(str[i])
    }
    
    return ans % 3 == 0
    
  }
