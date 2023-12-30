const isReallyNaN = (val) => {
  
    if(typeof val == 'string' && val === 'NaN'){
      return false
    }
    
    return String(val) === 'NaN' ? true : false;
    
  };
