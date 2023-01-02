function printerError(s) {
    s = s.split('');
    let errorC = 0;
    for (i = 0; i < s.length; i++){
      if (s[i].match(/[n-z]/)){
        errorC++
      }
    }
    return `${errorC}/${s.length}`
  }