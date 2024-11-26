function alphabetWar(fight){
  
    let pointsL = [['w', 4], ['p', 3], ['b', 2], ['s', 1]]
    let pointsR = [['m', 4], ['q', 3], ['d', 2], ['z', 1]]
    let tL = 0
    let tR = 0
    
    fight = fight.split('')
    
    for(i = 0; i < fight.length; i++){
      
      if(fight[i] === '*'){
        continue
      }
  
      if(fight[i + 1] === '*' || fight[i - 1] === '*'){
        fight[i] = '_'
      }
      
      for(l = 0; l < 4; l++){
        if(fight[i] === pointsL[l][0]){
          tL += pointsL[l][1]
        }
      }
      
      for(r = 0; r < 4; r++){
        if(fight[i] === pointsR[r][0]){
          tR += pointsR[r][1]
        }
      }
      
      
    }
    
    return tL > tR ? "Left side wins!" :
           tR > tL ? "Right side wins!" : "Let's fight again!"
    
  }
