function firstToLast(str,c){

    let first = -1
    let last = -1
    
    for(let i = 0; i < str.length; i++){
      if(str[i] == c && first == -1){
        first = i
        continue
      }
      
      if(str[i] == c && first != -1){
        last = i
      }
      
    }
    
    return first == -1 && last == -1? -1 :
           first != -1 && last == -1? 0 :
           last - first
    
  }
