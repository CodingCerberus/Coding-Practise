function differenceOfSquares(n){
  
    let sumNsquare = 0
    
    for(i = 1; i <= n; i++){
      sumNsquare += i
    }
    
    sumNsquare*= sumNsquare
    
    let sumNsquare2 = 0
    
    for(i = 1; i <= n; i++){
      sumNsquare2 += i ** 2
    }
    
    return sumNsquare - sumNsquare2
    
  }