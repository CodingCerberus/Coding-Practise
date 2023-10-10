function isValidWalk(walk) {
  
    if(walk.length != 10){
      return false
    }
    
    let ans = [0, 0]
    
    for(i = 0; i < walk.length; i++){
      if(walk[i] == 'n'){
        ans[0]++
      }else if(walk[i] == 's'){
        ans[0]--
      }else if(walk[i] == 'e'){
        ans[1]++
      }else if(walk[i] == 'w'){
        ans[1]--
      }
    }
    
    return ans[0] == 0 && ans[1] == 0 ? true : false
    
  }