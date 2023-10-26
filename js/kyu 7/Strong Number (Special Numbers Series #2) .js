function strong(n) {

    let ans = 0
    
    for(i = 0; i < String(n).length; i++){
      let currentN = 1
      for(j = Number(String(n)[i]); j > 0; j--){
        currentN *= j
      }
      ans += currentN
    }
    
    return ans == n ? "STRONG!!!!" : "Not Strong !!"
  }