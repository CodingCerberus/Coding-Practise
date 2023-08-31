function alphabetWar(fight){
  
  fight = fight.split('')
  
  let l = 0
  let r = 0
  
  for(i = 0; i < fight.length; i++){
    if(fight[i] == 'w'){
      l += 4
    } else if(fight[i] == 'p'){
      l += 3
    } else if(fight[i] == 'b'){
      l += 2
    } else if(fight[i] == 's'){
      l += 1
    } else if(fight[i] == 'm'){
      r += 4
    } else if(fight[i] == 'q'){
      r += 3
    } else if(fight[i] == 'd'){
      r += 2
    } else if(fight[i] == 'z'){
      r += 1
    }
  }
  
  return l == r ? "Let's fight again!" :
         l > r ? "Left side wins!" : "Right side wins!"
  
}
