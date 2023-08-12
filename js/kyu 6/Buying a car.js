function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  
  let totalSavings = 0
  
  for(i = 0 ; ; i++){
    
    if(startPriceOld + totalSavings >= startPriceNew){
      return [i, Math.round(startPriceOld + totalSavings - startPriceNew)]
    }
    
    totalSavings += savingperMonth
    
    if(i % 2 == 1){
    percentLossByMonth += 0.5 
    }
    
    startPriceOld = startPriceOld * ((100 - percentLossByMonth)/100)
    startPriceNew = startPriceNew * ((100 - percentLossByMonth)/100)
    
  }
  
  
}
