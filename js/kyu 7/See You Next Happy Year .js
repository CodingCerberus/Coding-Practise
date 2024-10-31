function nextHappyYear(year){
  
    do{
      year++
      let temp = year
      temp = String(temp).split('')
      var temp2 = [...new Set(temp)]
    }while(temp2.length < 4)
    
    return year
    
  }
