function duckDuckGoose(players, goose) {
  
 if(goose % players.length === 0){
   return players[players.length - 1].name
 }
  
  if(goose > players.length){
    return players[goose % players.length - 1].name
  }
  
  return players[goose - 1].name
  
}
