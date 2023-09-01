function flattenAndSort(array) {
  
  array = array.flat().sort((a, b)=> a - b)
  
  return array
  
}
