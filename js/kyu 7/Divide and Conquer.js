function divCon(x){
 let ans1 = 0
 let ans2 = 0
 
 for(i = 0; i < x.length; i++){
   if(typeof x[i] == 'number'){
     ans1 += x[i]
   }else if(typeof x[i] == 'string'){
     ans2 += Number(x[i])
   }
 }
  
  return ans1 - ans2
}
