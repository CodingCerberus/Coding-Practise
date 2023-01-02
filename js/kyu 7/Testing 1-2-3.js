var number=function(array){
    let newArr = array
    for(i = 0; i < array.length; i++){
      array[i] = `${i + 1}: ${array[i]}`
    }
    return newArr
  }