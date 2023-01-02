function findNeedle(haystack) {
  for(i = 0; ; i++){
    if (haystack[i] === 'needle'){
      return `found the needle at position ${i}`
    }
  }
}