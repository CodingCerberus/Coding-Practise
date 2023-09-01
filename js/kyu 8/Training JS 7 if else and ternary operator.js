//P: n , an interger, number of units bought
//R: total end price, but there is a discount for bulk buying, it's number
//E: 1 > 100, 5 > 475, 10 > 900
//P: check number range, then apply relevant calc

function saleHotdogs(n){
    return n < 5 ? n * 100 : n < 10 ? n * 95 : n * 90
  }
