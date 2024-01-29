function calculate(str) {
  
    str = str.split('plus').join(' + ')
    str = str.split('minus').join(' - ').split(' ')
    
    let ans = Number(str[0])
    
    for(i = 2; i < str.length; i += 2){
      if(str[i - 1] == '+'){
        ans += Number(str[i])
      } else {
        ans -= Number(str[i])
      }
    }
    
    return String(ans)
  }
