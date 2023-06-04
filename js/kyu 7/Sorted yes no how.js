function isSortedAndHow(array) {
  
  let copyAB = array.map(x => x).sort((a, b)=> a - b).join(' ')
  let copyO = array.map(x => x).join(' ')
  let copyBA = array.map(x => x).sort((a, b)=> b - a).join(' ')
  
  return copyO == copyAB? 'yes, ascending' :
         copyO == copyBA? 'yes, descending' : 'no'
    
}
