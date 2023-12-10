function evil(n) {
  
    let binr = ((n >>> 0).toString(2)).split('')
    let count =  0
    
    for(i = 0; i < binr.length; i++){
      if(binr[i] == '1'){
        count++
      }
    }
    
    return count % 2 == 0 ? "It's Evil!" : "It's Odious!"
    
  }
