function descendingOrder(n){
    let sortArray = String(n).split('').sort().reverse();
    let highNumber = "";
    sortArray.forEach( x => highNumber += x);
    return Number(highNumber)
  }