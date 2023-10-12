function solve(s) {
    s = s.split(/[aeiou]/)
    let ans = 0
    let alpha = [0, 0,'b','c','d',0,'f','g','h',0,'j','k','l','m','n',0,'p','q','r','s','t',0,'v','w','x','y','z']
    
    for(i = 0; i < s.length; i++){
      
      let total = 0
      
      for(j = 0; j < s[i].length; j++){
        total += alpha.indexOf(s[i][j])
      }
      
      if (total > ans){
        ans = total
      }
      
    }
    
    return ans
  };