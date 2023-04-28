function evaporator(ml, evap, thresh){ 
  
  let nday = 0
  thresh = ml * thresh/100
  
  while(ml > thresh){
    ml -= ml * (evap/100)
    nday++
  }
  
  return nday
  
}Deodorant Evaporator
