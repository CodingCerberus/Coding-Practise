function solve(a,b){
  
    let ans = []
    a = a.split('')
    b = b.split('')
    
    for(i = 0; i < a.length; i++){
      if(b.includes(a[i])){
        continue
      }else{
        ans.push(a[i])
      }
    }
    
      for(i = 0; i < b.length; i++){
      if(a.includes(b[i])){
        continue
      }else{
        ans.push(b[i])
      }
    }
    
    return ans.join('')
    
  };
