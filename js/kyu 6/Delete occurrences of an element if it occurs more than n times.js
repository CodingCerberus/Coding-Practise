//P, array of numbers, and a number. use the number to remove dup occurances in the array more then then numbher
//R, an array with no dupes more then the number
//E, [1,2,3,4,1,1,2], 1 returns [1,2,3,4]. [2,3,2,2,2,1,1,1] 2 returns [2,3,2,1,1]
//P, For each number, remove it from the array if it occurs more then n
// for each loop, count = 0, if loop number == itself, check if more then count, if not, count++ 

function deleteNth(arr,n){
    for (i = 0; i < arr.length; i++){
      let counter = 0
      for (j = 0; j < arr.length; j++){
        if(arr[i] === arr[j]){
          if (counter === n){
            arr.splice(j, 1)
            j--
          } else {
            counter++
          }
        }
      }
    }
    return arr
  }