function pointsPer48(ppg, mpg) {

    if(ppg == 0 || mpg == 0){
      return 0
    }
    
    let ppm = ((ppg/mpg)*48)
    
    return Number((Math.round(ppm * 10) / 10).toFixed(1))
    
  }