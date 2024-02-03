function validSpacing(s) {
  
    for(i = 0; i < s.length; i++){
      if(i == 0 || i == s.length - 1){
        if(s[i] == ' '){
          return false
        }else{
          continue
        }
      }
      
      if(s[i] == ' '){
        if((s[i - 1] == ' ')||(s[i + 1] == ' ')){
          return false
        }
      }
    }
    
    return true  
    
  }
