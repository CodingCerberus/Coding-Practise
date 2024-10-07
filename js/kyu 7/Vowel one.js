function vowelOne(s){
  
    let regex = /[aeiou]/i
   s = s.split('')
    
    for(i = 0; i < s.length; i++){
      if (regex.test(s[i])){
        s[i] = '1'
      }else{
        s[i] = '0'
      }
    }
    
    return s.join('')
      
  }
