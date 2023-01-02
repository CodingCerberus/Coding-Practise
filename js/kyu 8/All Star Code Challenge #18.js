function strCount(str, letter){
    let count = 0
    str = str.split("")
    str.forEach(x => {
      if(x == letter){
        count++
      }
    })
    return count
  }