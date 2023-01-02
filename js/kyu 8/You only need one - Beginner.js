function check(a, x) {
    let result = false
    for(i = 0; i < a.length; i++){
      if(a[i] === x){
        result = true
      }
    }
    return result
  }