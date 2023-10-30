function solution(value){
  
    let ans = String(value).split('')
    
    while(ans.length < 5){
      ans.unshift('0')
    }
    
    return 'Value is ' + ans.join('')
    
  }