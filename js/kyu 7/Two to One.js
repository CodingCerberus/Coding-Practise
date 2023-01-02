function longest(s1, s2) {
    let fullString = Array.from(s1 + s2).sort();
    let i = 0;
    while (i < fullString.length){
      if (fullString[i] == fullString[i + 1]){
      fullString.splice(i, 1)
        } else {
          i++
        }
    };
    return fullString.join('');
  }