function revrot(str, sz) {

    if(sz == '' || str.length == 0 || sz > str.length){
      return ''
    }
    
    let chunks = []
    
    for (var i = 0, charsLength = str.length; i < charsLength; i += sz) {
      chunks.push(str.substring(i, i + sz));
  }
    
    for(j = 0; j < chunks.length; j++){
      if (chunks[j].length != sz){
        chunks.pop()
        break
      }
      
      chunks[j] = chunks[j].split('')
      
      let cAdd = 0
      
      for(k = 0; k < chunks[j].length; k++){
        cAdd += Number(chunks[j][k])**3
      }   
      
      if(cAdd % 2 == 0){
        chunks[j].reverse().join('')
      }else{
        chunks[j].push(chunks[j][0])
        chunks[j].shift()
      }
      
      chunks[j] = chunks[j].join('')
      
    }
    
    return chunks.join('')
    
  }