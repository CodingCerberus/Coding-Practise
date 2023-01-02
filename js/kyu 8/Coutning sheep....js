function countSheeps(arrayOfSheep) {
    let trueCount = 0
    for (i=0;i<arrayOfSheep.length;i++){
      if (arrayOfSheep[i] == true){
        trueCount++
      }
    }
    return trueCount
  }