function getMissingElement(arr){
  
    arr = arr.sort()
    let i = 0
    
    while (i <= arr.length){
      if(i == arr[i]){
        i++
        continue
      } else {
        return i
      }
    }
    
  }
