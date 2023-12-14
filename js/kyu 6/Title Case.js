function titleCase(title, minorWords) {
  
    if(title == ''){
      return ''
    }
  
    if(minorWords != undefined){
      minorWords = minorWords.toLowerCase().split(' ')
    }
    
    title = title.toLowerCase().split(' ')
    
    for(i = 0; i < title.length; i++){
      title[i] = title[i].split('')
      
      if(minorWords != undefined){    
      if(minorWords.includes(title[i].join('')) && i != 0){
        title[i][0] = title[i][0].toLowerCase()
      }else{
        title[i][0] = title[i][0].toUpperCase()
      }
      }else{
        title[i][0] = title[i][0].toUpperCase()
      }
      
      title[i] = title[i].join('')
  
    }  
    
    return title.join(' ')
    
  }
