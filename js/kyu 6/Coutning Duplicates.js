//first attempt, did not account for multiple of same letters in string
function duplicateCount(text){
    let maxC = text.length;
    text = text.toLowerCase();
    let arr = new Set(text);
    return maxC - arr.size
  }
  
  function duplicateCount(text){
    text = text.toLowerCase().split('').sort();
    let dupeCount = 0;
    for (i = 0; i < text.length; i++){
      if (text[i] == text[i+1]){
        dupeCount++;
        while (text[i] == text[i+1]){
          text.splice(text[i+1], 1)
        }
      }
    };
    return dupeCount;
  }