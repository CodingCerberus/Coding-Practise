function mergeArrays(arr1, arr2) {
    let answer = [...new Set(arr2.concat(arr1))]
    return answer.sort((a, b) => a - b)
  }