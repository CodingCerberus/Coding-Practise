function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  
  if (enteredCode !== correctCode){
    return false
  }
  
  currentDate = currentDate.split(' ')
  expirationDate = expirationDate.split(' ')
  
  function monthConvert(date){
  if(date[0] == 'January'){
    date[0] = 1
  } else if(date[0] == 'Febuary'){
    date[0] = 2
  } else if(date[0] == 'March'){
    date[0] = 3
  } else if(date[0] == 'April'){
    date[0] = 4
  } else if(date[0] == 'May'){
    date[0] = 5
  } else if(date[0] == 'June'){
    date[0] = 6
  } else if(date[0] == 'July'){
    date[0] = 7
  } else if(date[0] == 'August'){
    date[0] = 8
  } else if(date[0] == 'September'){
    date[0] = 9
  } else if(date[0] == 'October'){
    date[0] = 10
  } else if(date[0] == 'November'){
    date[0] = 11
  } else if(date[0] == 'December'){
    date[0] = 12
   }
    
  date[1] = Number(date[1].slice(0, -1))
  date[2] = Number(date[2])  
    
  }
  
  monthConvert(currentDate)
  monthConvert(expirationDate)
  
  console.log(currentDate)
  console.log(expirationDate)

  console.log(currentDate[2] < expirationDate[2])
  console.log(expirationDate[0] === currentDate[0])
  
  if(currentDate[2] < expirationDate[2]){
    return true
  } else if (currentDate[2] > expirationDate[2]){
    return false
  }
  
  if(currentDate[0] < expirationDate[0]){
    return true
  } else if (currentDate[0] > expirationDate[0]){
    return false
  }
  
  if(currentDate[1] <= expirationDate[1]){
    return true
  } else {
    return false
  }
  
  
  
}
