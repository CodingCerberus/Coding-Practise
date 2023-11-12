function discoverOriginalPrice(disc, saleP){
  
    return Number(((disc / (100 - saleP))*100).toFixed(2))
    
  }