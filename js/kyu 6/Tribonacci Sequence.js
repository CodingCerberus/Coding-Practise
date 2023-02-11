//P: an array of 3 numbers, and n, a non negative number (including 0 possibly)
//R: an array as long as n, where each number after the given array is the sum of the 3 previous to it. return [] if n = 0
//E: [1,1,1], 10 gives [1,1,1,3,5,9,17,31,57,105]
//P: check for n = 0, then to keep it simple, check for arr.length. makes cases for <3, then .push to arr the sum of loop -1,-2,-3

function tribonacci(signature,n){
    if (n == 0){
      return []
    }
    
    if (n < 4){
    return signature.slice(0, n)
    }
    
    for (i = 3; i < n; i++){
      signature.push((signature[i - 1]) + (signature[i - 2]) + (signature[i - 3]))
    }
    
    return signature
  }