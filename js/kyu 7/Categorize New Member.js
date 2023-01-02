function openOrSenior(data){
    let outputA = [];
    for (i = 0; i < data.length; i++){
      if((data[i][0] >= 55) && (data[i][1] > 7)){
        outputA.push("Senior")
      } else {
        outputA.push("Open")
      }
    }
    return outputA
  }