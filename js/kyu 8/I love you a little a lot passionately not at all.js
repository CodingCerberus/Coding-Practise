function howMuchILoveYou(p) {
    let count = 0
    if ((p > 6) && (p % 6 == 0)){
      count = 6
    } else if (p > 6){
      count = p % 6
    } else {
      count = p
    }
    
    switch (count) {
    case 1:
      return "I love you";
      break;
    case 2:
      return "a little";
      break;
    case 3:
       return "a lot";
      break;
    case 4:
      return "passionately";
      break;
    case 5:
      return "madly";
      break;
    case 6:
      return "not at all";
      break;
  }
  }
