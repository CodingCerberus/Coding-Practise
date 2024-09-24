function flyBy(lamps, drone){
  
    lamps = lamps.split('')
    
    let regex = /[=|T]/
    
    for(i = 0; i < drone.length; i++){
      
      if(i + 1> lamps.length){
        break
      }
      
      if(regex.test(drone[i])){
        lamps[i] = "o"
      }
    }
    
    return lamps.join('')
    
  }
