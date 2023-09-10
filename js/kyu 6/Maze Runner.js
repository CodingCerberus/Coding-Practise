function mazeRunner(maze, directions) {
  
    let x = 0
    let y = 0
    
    for(i = 0; i < maze.length; i++){
      if(maze[i].indexOf(2) == -1){
        continue
      } else {
        x = maze[i].indexOf(2)
        y = i
      }
    }
    
    for(i = 0; i < directions.length; i++){
      if(directions[i] == 'N'){
        y--
      } else if(directions[i] == 'E'){
        x++
      } else if(directions[i] == 'S'){
        y++
      } else if(directions[i] == 'W'){
        x--
      }
  
      if(y > maze.length - 1 || x > maze[0].length -1 || y < 0 || x < 0){
        return 'Dead'
      }
      
      if(maze[y][x] == 1){
        return 'Dead'
      } else if (maze[y][x] == 3){
        return 'Finish'
      } else if (maze[y][x] == 0 || maze[y][x] == 2){
        continue
      }
      
    }
    
    return 'Lost'
    
  }