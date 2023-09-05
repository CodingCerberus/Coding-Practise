function calculator(a,b,sign){

    if(typeof a == 'string'){
      return 'unknown value'
    }
    
    if(typeof b == 'string'){
      return 'unknown value'
    }
  
    if(sign != '+' && sign != '-' && sign != '*' && sign != '/'){
      return 'unknown value'
    }
    
    return sign == '+' ? a + b :
           sign == '-' ? a - b :
           sign == '*' ? a * b :
           sign == '/' ? a / b : 'unknown value'
  
  }