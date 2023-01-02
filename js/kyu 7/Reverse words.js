function reverseWords(str) {
    let arr = str.split(' ');
    for (i = 0; i < arr.length; i++){
      let stringHolder = []
      for (a = 0; a < arr[i].length; a++){
        stringHolder.unshift(arr[i][a]);
      }
      arr[i] = stringHolder.join('')
    }
    return arr.join(' ')
  }