const sequenceSum = (begin, end, step) => {
  
  if(begin > end){
    return 0
  }else if(end % step != 0){
    return end
  }
  
  let ans = begin
  
  for(let i = 0; i <= end; i += step){
    ans += i
  }
  
  return ans
  
};
