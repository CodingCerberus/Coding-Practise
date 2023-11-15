function towerBuilder(nFloors) {
    let ans = new Array(nFloors)
    
    for(i = 0; i < nFloors; i++){
      ans[i] = new Array((nFloors * 2) - 1)
      ans[i].fill(' ')
      
      for(j = 0; j < ans[i].length; j++){
        if(j > nFloors - 2 - i && j < nFloors + i){
          ans[i][j] = '*'
        }
      }
      ans[i] = ans[i].join('')
    }
    
    return ans
    
  }