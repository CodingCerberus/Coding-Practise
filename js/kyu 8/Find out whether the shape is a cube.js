var cubeChecker = function(volume, side){
  
  if(side < 0 || volume < 1){
    return false
  }
  
  
  return volume === side ** 3
  
};
