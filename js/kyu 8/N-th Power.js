//P: Array of positive numbers and a non negative number ( could include 0? )
//R: the position of the given number in the array, to the power of the number given. or -1 if the numbers is not in the array
//E: array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9
//P: check arr.length, if N <= arr.length return minus 1, else return arr[N]**N

function index(array, n){
    if (array.length <= n){
      return -1
    } else {
      return array[n]**n
    }
  }