function sumNoDuplicates(numList) {
  
    let ans = 0
    
    for(i = 0; i < numList.length; i++){
      let dupC = numList 
      if(dupC.filter(x => x === numList[i]).length > 1){
        continue
      }else{
        ans += numList[i]
      }
    }
      
    return ans
    
  }
