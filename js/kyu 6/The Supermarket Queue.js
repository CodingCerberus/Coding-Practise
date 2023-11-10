function queueTime(cust, n) {
  
    if(cust == []){
      return 0
    }else if(n == 1){
      return cust.reduce((a, b)=> a + b, 0)
    }
    
    let ans = 0
    
    do{
      for(i = 0; i < cust.length; i++){
       if(cust[i] == 0){
         //console.log(cust)
          cust.splice(i, 1)
         i--
        }  
      }
     if(cust.length < n){
        n = cust.length
      }
      if(n == 0){
        break
      }
      
     for(i = 0; i < n; i++){
        cust[i]--
      }
      ans++
      }while(cust != [])
    
    return ans
    
  }