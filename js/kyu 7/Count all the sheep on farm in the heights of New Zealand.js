function lostSheep(fri, sat, tot){
  
    return tot - (fri.reduce((a, b)=> a + b, 0) + sat.reduce((a, b)=> a + b, 0))
    
  }
