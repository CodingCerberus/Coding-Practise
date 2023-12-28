function newAvg(arr, newavg) {
  
    let sum = arr.reduce((a, b)=> a + b, 0)
    
    let ans = Math.ceil(((arr.length + 1) * newavg) - sum)
    
    if(ans <= 0){
      throw new Error('Expected New Average is too low')
    }
    
    return ans
    
  }
