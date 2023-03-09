//PREP
//Params array of numbers, always at least 2 of them, always numbers, always unique, in ascending order, can be positive or negative
//Returns if arr is consecutive, return null, otherwise return the element not exactly 1 larger then the previous 
//Example [1, 2, 4, 5] returns 4, [1,2,3,4] returns null
//Psuedo for loop, check if i + 1 == i++, if not return i++

function firstNonConsecutive (arr) {
    for(i = 0; i < arr.length - 1; i++){
      if((arr[i + 1]) !== (arr[i] + 1)){
        return arr[i+1]
      }
    }
    return null
  }
