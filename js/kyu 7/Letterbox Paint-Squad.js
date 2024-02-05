var paintLetterboxes = function(start, end) {
  
    let count = [0,0,0,0,0,0,0,0,0,0]
    
    for(start; start <= end; start++){
      let hold = String(start).split('')
      console.log(hold)
      for(j = 0; j < hold.length; j++){
        count[Number(hold[j])]++
      }
    }
    
    return count
  }
