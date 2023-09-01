function countSmileys(arr) {
    let count = 0
    arr.forEach(x => {
      if ((x.startsWith(':')) || (x.startsWith(';'))){
        if ((x.endsWith('\)')) || (x.endsWith('D'))){
          if(x.length === 2){
          count++
          } else if (x.length === 3){
            if ((x[1] == "-") || (x[1] == "~")){
              count++
            }
          }
        }
      }
    })
    return count
  }
