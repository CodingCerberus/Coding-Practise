function menFromBoys(arr){
  
  let even = []
  let odd = []
  
  for(i = 0; i < arr.length; i++){
    if(even.includes(arr[i]) || odd.includes(arr[i])){
      continue
    }
    
    
    if(arr[i] % 2 == 0){
      even.push(arr[i])
    }else{
      odd.push(arr[i])
    }
  }
  
  even = even.sort((a, b)=> a - b)
  odd = odd.sort((a, b)=> b - a)
  
  console.log(even)
  console.log(odd)
  
  return even.concat(...odd)
  
}
