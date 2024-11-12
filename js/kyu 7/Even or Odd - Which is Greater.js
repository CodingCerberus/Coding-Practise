function evenOrOdd(str) {
    let odds = []
    let evens = []
    
    for(i = 0; i < str.length; i++){
      if(Number(str[i]) % 2 == 0){
        evens.push(Number(str[i]))
      }else{
        odds.push(Number(str[i]))
      }
    }  
    
    odds = odds.reduce((a, b)=> a + b, 0)
    evens = evens.reduce((a, b)=> a + b, 0)
  
    return odds > evens ? 'Odd is greater than Even' :
           evens > odds ? 'Even is greater than Odd' : 'Even and Odd are the same'
  }
