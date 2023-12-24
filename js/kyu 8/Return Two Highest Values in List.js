function twoHighest(arr) {
  
    let ans = [...new Set(arr)]
    
    ans = ans.sort((a, b)=> b - a)
    
    if(ans.length == 0){
      return []
    }  else if(ans.length == 1){
      return [ans[0]]
    } else{
      return [ans[0], ans[1]]
    }
    
  }
