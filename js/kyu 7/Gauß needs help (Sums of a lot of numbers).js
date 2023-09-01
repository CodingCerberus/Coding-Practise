function f(n){
  
  return Number.isInteger(n) == false ? false : 
         n < 1 ? false : (n * (n / 2)) + (n / 2)
  
};
