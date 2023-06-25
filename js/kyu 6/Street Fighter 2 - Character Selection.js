function streetFighterSelection(fighters, pos, moves){
  
  let ans = []
  
  console.log(fighters[pos[0]][pos[1]])
  
  if(moves.length == 0){
    return []
  }
  
  for(i = 0; i < moves.length; i++){
    if(moves[i] == 'left'){
      pos[1]--
      if(pos[1] < 0){
        pos[1] = 5
      }
    }else if(moves[i] == 'right'){
      pos[1]++
      if(pos[1] > 5){
        pos[1] = 0
      }
    }else if(moves[i] == 'up'){
      if (pos[0] == 1){
        pos[0] = 0
      }
    }else if(moves[i] == 'down'){
      if (pos[0] == 0){
        pos[0] = 1
      }
    }
    
    ans.push(fighters[pos[0]][pos[1]])
  }
  
  return ans
    
}
