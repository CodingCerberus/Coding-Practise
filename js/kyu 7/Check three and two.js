function checkThreeAndTwo(array) {
  
    let chkr = [...new Set(array)]
    
    if(chkr.length !== 2){
      return false
    }
    
    return array.filter(x => x === chkr[0]).length === 2 ? true :
           array.filter(x => x === chkr[0]).length === 3 ? true : false
    
  }
