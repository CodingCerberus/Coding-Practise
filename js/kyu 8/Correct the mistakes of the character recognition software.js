function correct(string){
    string = string.split('')
    for(i = 0; i < string.length; i++){
      if (string[i] === "5"){
        string[i] = "S"
      } else if (string[i] === "1"){
        string[i] = "I"
      } else if (string[i] === "0"){
        string[i] = "O"
      }
    }
    return string.join('')
  }