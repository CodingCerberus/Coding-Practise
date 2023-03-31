function stockList(a, c){

  
  for (i = 0; i < a.length; i++){
    a[i] = a[i].split(' ')
    a[i][0] = a[i][0][0]
    a[i][1] = Number(a[i][1])
  }

  for (i = 0; i < c.length; i++){
    c[i] = [c[i], 0]
  }  
  
  for (i = 0; i < a.length; i++){
    
    for (j = 0; j < c.length; j++){

      if(a[i][0] === c[j][0]){
        c[j][1] = c[j][1] + a[i][1]
      } 
    }
  }
  
  let sumC = 0
  
  for (i = 0; i < c.length; i++){
    sumC += c[i][1]
  }
  
  if (sumC === 0){
    return ""
  }

  let ans = ""
  
  for (i = 0; i < c.length; i++){

    if(i === c.length - 1){
      ans += `(${c[i][0]} : ${c[i][1]})`
      break
    }
    
    ans += `(${c[i][0]} : ${c[i][1]}) - `
    
  }
  return ans
}