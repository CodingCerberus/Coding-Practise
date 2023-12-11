function cutIt(arr){
  
    let newArr = arr.map((x)=> x).sort((a, b)=> a.length - b.length)
    let maxL = newArr[0].length
    
    for(i = 0; i < arr.length; i++){
      if(arr[i].length > maxL){
        arr[i] = arr[i].slice(0, maxL)
      }
    }
    return arr
  }
