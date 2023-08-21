function dataReverse(data) {
  
  let ans = []
  
  let looper = data.length / 8
  
  for(i = 0; i < looper; i++){
    ans.push(data.slice(-8))
    data = data.slice(0, -8)
  }
  
  return ans.flat(1)
  
}
