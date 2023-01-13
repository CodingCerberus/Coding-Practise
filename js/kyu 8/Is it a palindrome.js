//P: string
//R: Boolean, if palidrome, return true (case insensitive)
//E: Bob: true hello: false
//P: to lower case the string for uniformity, then create array and reverse it, join it compare to input

function isPalindrome(x) {
    let forward = x
    let arr = []
    x = x.split('')
    x.forEach(y => arr.unshift(y))
    arr = arr.join('')
    if (arr.toLowerCase() === forward.toLowerCase()){
      return true
    } else {
      return false
    }
  }

