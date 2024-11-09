function solve(arr){
  
    let ans = []
    let oddF = 0
    if(arr.length % 2 === 1){
      oddF = 1
    }
    
    arr.sort((a, b)=> b - a)
    
    for(i = 0; i <= Math.floor(arr.length / 2) - 1; i++){
      ans.push(arr[i])
      ans.push(arr[arr.length - 1 - i])
      
      if(oddF === 1 && i === Math.floor(arr.length / 2) - 1){
        ans.push(arr[i + 1])
      }
    }
    
    return ans
    
  };
