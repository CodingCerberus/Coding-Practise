function squareDigits(num){
    num = String(num);
    num = num.split("");
    for (i = 0; i < num.length; i++){
      num[i] = Number(num[i]) * Number(num[i])
    }
    return Number(num.join(""));
  }