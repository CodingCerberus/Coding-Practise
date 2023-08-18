function sumTriangularNumbers(n) {
  
  if(n == 1){
    return 1
  }
  
  if (n < 1){
    return 0
  }
  
 let ans = 0
 let tNum = 0
 
 for(i = 1; i <= n; i++){
   tNum += i
   ans += tNum
 }
  
  return ans 

}
