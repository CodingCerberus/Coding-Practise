const sequenceSum = (begin, end, step) => {
  
  if(begin > end){
    return 0
  }
  
  let ans = begin
  let incr = step + begin

  while(incr <= end){
    ans += incr
    incr += step
  }
  
  return ans
  
};
