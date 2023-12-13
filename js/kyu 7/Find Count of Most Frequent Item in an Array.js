function mostFrequentItemCount(coll) {
  
    if(coll.length == 0){
      return 0
    }
    
    if(coll.length == 1){
      return 1
    }
    
    console.log(coll)
  
    let countSet = [...new Set(coll)]
    
    for(i = 0; i < countSet.length; i++){
      countSet[i] = [countSet[i], 0]
    }
    
    for(i = 0; i < coll.length; i++){
      for(j = 0; j < countSet.length; j++){
        if(countSet[j][0] == coll[i]){
          countSet[j][1]++
        }
      }
    }
    
    countSet.sort((a, b)=> b[1] - a[1])
    
    return countSet[0][1] 
    
  }
