function isVow(a){

    let vArr = [97, 101, 105, 111, 117]
    
    for(i = 0; i < a.length; i++){
      if(vArr.includes(a[i])){
        a[i] = String.fromCharCode(a[i])
      }
    }
    
    return a
    
  }