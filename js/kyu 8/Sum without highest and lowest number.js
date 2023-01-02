function sumArray(array) {
    if ((array == []) || (array == null) || (array.length < 3)){
      return 0
    } else {
    let initialValue = 0
    let sum = 0
    let maxxC = Math.max(...array)
    let minnC = Math.min(...array)
    sum = array.reduce((a, b) => a + b, initialValue) - maxxC - minnC
    return sum
      }
  }