function race(v1, v2, g) {
  
  if(v1 >= v2){
    return null
  }
  
  let diff = v2 - v1
  
  let catchUp = g / diff
  
  let s = Math.floor(catchUp * 3600)

  let h = Math.floor(s / 3600)
  
  let m = Math.floor((s - (h * 3600)) / 60)
  
  s = Math.floor(s % 60)
  
  return [h, m, s]
  
}
