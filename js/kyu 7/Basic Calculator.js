function calculate(num1, op, num2) {
  
    if(op == '+'){
      return num1 + num2
    }else if(op == '-'){
      return num1 - num2
    }else if(op == '*'){
      return num1 * num2
    }else if(op == '/' && num2 != 0){
      return num1 / num2
    }else{
      return null
    }
    
  }
