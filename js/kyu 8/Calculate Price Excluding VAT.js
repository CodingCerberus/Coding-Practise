function excludingVatPrice(price){
  
    if(price == null){
      return -1
    }
    
    return Number(((price /115) *100).toFixed(2))
  }