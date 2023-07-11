function cubeOdd(arr) {
  
  for(i = 0; i < arr.length; i++){
    if (typeof arr[i] != 'number'){
      return undefined
    }
  }
  
  let cubeArr = arr.map(x => x ** 3)
  cubeArr = cubeArr.filter(x => x % 2 != 0)

  return cubeArr.reduce((x, y) => x + y, 0)
  
  
}
