function dbSort(a){
  
    let arrA = []
    let arrB = []
    
    for(i = 0; i < a.length; i++){
      if(typeof a[i] === "number"){
        arrA.push(a[i])
      }else{
        arrB.push(a[i])
      }
    }
  
    arrA = arrA.sort((a, b)=> a - b)
    arrB = arrB.sort()  
    
    return arrA.concat(arrB)
    
  }
