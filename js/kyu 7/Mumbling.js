function accum(s) {
	let newString = [];
  let finishString = []
  for (i = 0; i < s.length; i++){
    newString.push(s[i].toLowerCase());
    newString[i] = newString[i].repeat(i+1);
    finishString.push(newString[i].charAt(0).toUpperCase() + newString[i].slice(1));
    };
     
  return finishString.join('-')
}