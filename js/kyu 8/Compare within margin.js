function closeCompare(a, b, margin){
  
  if(margin == undefined){
    margin = 0
  }

if(margin == 0){
  if(a == b){
    return 0
  }
}

return Math.abs(a - b) <= margin ? 0 :
       a < b ? -1 : 1

}
