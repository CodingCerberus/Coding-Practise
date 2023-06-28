function bump(x){
  
  let bumps = 0
  
  for(i = 0; i < x.length; i++){
    if(x[i] == 'n'){
      bumps++
    }  
  }
  
  return bumps < 16 ? 'Woohoo!' : 'Car Dead'
  
}
