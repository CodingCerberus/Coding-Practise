function vowelIndices(word){
  
  word = word.toLowerCase()
  
  let ans = []

  for(i = 0; i < word.length; i++){
    if (word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u" || word[i] === "y")
      ans.push(i + 1)
  }
  
  return ans
  
}
