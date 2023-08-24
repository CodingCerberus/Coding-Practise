function distanceBetweenPoints(a, b) {
  
  let c = a.x > b.x ? a.x - b.x : b.x - a.x
  let d = a.y > b.y ? a.y - b.y : b.y - a.y

  return Math.sqrt((c ** 2) + (d ** 2))  
  
}
