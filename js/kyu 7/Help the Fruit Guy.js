function removeRotten(bagOfFruits){
  
    if(bagOfFruits == [] || bagOfFruits == null){
      return []
    }
    
    for(i = 0; i < bagOfFruits.length; i++){
      if(bagOfFruits[i].startsWith('rotten')){
        bagOfFruits[i] = bagOfFruits[i].toLowerCase()
        bagOfFruits[i] = bagOfFruits[i].split('')
        bagOfFruits[i].splice(0, 6)
        bagOfFruits[i] = bagOfFruits[i].join('')
      }
    }
  
    return bagOfFruits
    
  }