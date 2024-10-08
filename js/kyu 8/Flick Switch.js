function flickSwitch(arr){
  
    let ans = []
    let tfSwitch = 1
    
    for(i = 0; i < arr.length; i++){
      if(arr[i] === 'flick'){
        tfSwitch *= -1
      }
      
      if(tfSwitch === 1){
        ans.push(true)
      }else{
        ans.push(false)
      }
      
    }
    
    return ans
    
  }
