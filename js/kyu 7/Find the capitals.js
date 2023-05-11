var capitals = function (word) {
  
  let ans = []
  
  for (i = 0; i < word.length; i++){
    if (word[i] == word[i].toUpperCase()){
      ans.push(i)
    }
  }
  
  return ans
  
};
