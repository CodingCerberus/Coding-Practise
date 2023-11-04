function abbreviate(string) {
  
    string = string.split(' ')
    
    for(i = 0; i < string.length; i++){
      if(string[i].includes('-')){
        string[i] = string[i].split('-')
        
        for(j = 0; j < string[i].length; j++){
          if(string[i][j].length > 3){
          string[i][j] = string[i][j][0] + String(string[i][j].length - 2) + string[i][j][string[i][j].length - 1]
            }
        }
        string[i] = string[i].join('-')
      }else{
        if(string[i].length > 3){
          
          let l = string[i].length
          let spC = ''
          
          if(/[\W$]/.test(string[i])){
            l--
            spC = string[i][string[i].length - 1]
          }
          
          string[i] = string[i][0] + String(l - 2) + string[i][l - 1]
          
          if(spC != ''){
            string[i] = string[i] + spC
          }
            }
      }
    }
    return string.join(' ')
    
  }