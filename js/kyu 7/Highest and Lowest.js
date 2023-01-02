function highAndLow(numbers){
    let arraySort = numbers.split(" ");
    for (i = 0; i < arraySort.length; i++){
      arraySort[i] = Number(arraySort[i])
    };
    let lowest = Math.min(...arraySort);
    let highest = Math.max(...arraySort);
    return `${highest} ${lowest}`
  }
  
  function highAndLow(numbers){
    let arraySort = numbers.split(" ");
    for (i = 0; i < arraySort.length; i++){
      arraySort[i] = Number(arraySort[i])
    };
    return `${Math.max(...arraySort)} ${Math.min(...arraySort)}`
  }