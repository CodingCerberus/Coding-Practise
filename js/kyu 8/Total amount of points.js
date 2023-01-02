function points(games) {
    let numPoints = 0;
    for (i = 0; i < games.length; i++){
      let x = Number(games[i][0]);
      let y = Number(games[i][2]);
        if (x > y){
          numPoints += 3
        } else if (x == y){
          numPoints += 1
        }
    }
    return numPoints
  }