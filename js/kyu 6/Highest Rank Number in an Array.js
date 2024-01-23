function highestRank(arr){
  
    let arrSet = [...new Set(arr)]
    
    for(i = 0; i < arrSet.length; i++){
      arrSet[i] = [arrSet[i], 0]
      for(j = 0; j < arr.length; j++){
        if(arrSet[i][0] == arr[j]){
          arrSet[i][1]++
        }
      }
    }
    
    arrSet = arrSet.sort((a, b)=> b[1] - a[1])
    let ans = []
    let highV = arrSet[0][1]
    
    for(i = 0; i < arrSet.length; i++){
      if(arrSet[i][1] == highV){
        ans.push(arrSet[i][0])
      } else {
        break
      }
    }
    
    ans = ans.sort((a, b)=> b - a)
    return ans[0]
    
  }
