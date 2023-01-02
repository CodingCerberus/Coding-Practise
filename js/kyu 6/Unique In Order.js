var uniqueInOrder=function(iterable){
    if ((typeof iterable) == "string"){
      //string function
      let newArr = iterable.split("")
      for (i = 0; i < newArr.length; i++){
        if (newArr[i] == newArr[i+1]){
          newArr.splice([i+1], 1)
          i--
        }
      }
      return newArr
    } else {
      //array function
      let newArr = iterable
      for (i = 0; i < newArr.length; i++){
        if (newArr[i] == newArr[i+1]){
          newArr.splice([i+1], 1)
          i--
        }
      }
      return newArr
    }
  }


  ///refactored
var uniqueInOrder=function(iterable){
    let newArr
    if ((typeof iterable) == "string"){
      newArr = iterable.split("")
    } else {
      newArr = iterable
    }
      for (i = 0; i < newArr.length; i++){
        if (newArr[i] == newArr[i+1]){
          newArr.splice([i+1], 1)
          i--
        }
      }
      return newArr
    }