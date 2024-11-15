function getStrings(city){
  
    city = city.toLowerCase().split(' ').join('').split('')
    
    let ans = [...new Set(city)]
    let ans2 = [...new Set(city)]
    
    for(i = 0; i < ans.length; i++){
      
      ans2[i] += ":"
      
      for(k = 0; k < city.length; k++){
        if(ans[i] === city[k]){
          ans2[i] += "*"
        }
      }
      
    }
   
    return ans2.join(",")
    
  }
