function solve(s){
  
    let ans = [0, 0, 0, 0]
    
    for(i = 0; i < s.length; i++){
      if(s[i].match(/[A-Z]/g)){
        ans[0]++
      }else if(s[i].match(/[a-z]/g)){
        ans[1]++
      }else if(s[i].match(/[0-9]/g)){
        ans[2]++
      }else{
        ans[3]++
      }
    }
    
    return ans
    
  }