var splitInParts = function(s, partLength){
  
    let ans = []
    
    for(i = 0; i < s.length/partLength; i++){
      ans.push(s.substring(partLength * i, (partLength * i) + partLength))
    }
    
    return ans.join(' ')
    
  }
