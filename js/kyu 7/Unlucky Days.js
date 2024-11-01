function unluckyDays(year){
  
    let ans = 0
    
    for(i = 1; i < 13; i++){
    let dateGet = new Date(`${year}-${i}-13`)
    if(dateGet.getDay() === 5){
      ans++
      }
    }
    
    return ans
    
  }
