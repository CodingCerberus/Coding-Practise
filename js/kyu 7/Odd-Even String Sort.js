function sortMyString(S) {
  
  let even = []
  let odd = []
  
  for(i = 0; i < S.length; i++){
    if(i % 2 == 0){
      even.push(S[i])
    }else if(i % 2 == 1){
      odd.push(S[i])
    }
  }
  
  return even.join('') + ' ' + odd.join('')
  
}
