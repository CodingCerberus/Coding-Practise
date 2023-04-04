function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
    for (i = 0; i < birds.length; i++){
      if (birds[i] === geese[0] || birds[i] === geese[1] || birds[i] === geese[2] || birds[i] === geese[3] || birds[i] === geese[4]){
        birds.splice(i, 1)
        i--
      }
    }
    return birds
  };