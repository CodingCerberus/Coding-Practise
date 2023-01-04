//PREP
//Params: Array, only numbers
//Return: one number, that in the array that appears an odd number of times in the array
//Examples: 0, 1, 0, 1, 0, should return 0, [1] should return 1
//Psuedo:
//grab a number from the array, then count from 0 how many times in the array if it appears.
//we know there is only one number that will appear an odd number of times, so we can jump to return if we find it! makes it more efficient
//can start with a foreach probably
//

function findOdd(A) {
    let answer = 0
    A.forEach(x => {
      let count = 0
      for (i = 0; i < A.length; i++){
        if (x == A[i]){
          count++
        }
      }
        if (count % 2 !== 0){
          answer = x
        }
    })
    return answer
  }