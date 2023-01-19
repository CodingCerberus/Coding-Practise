//P: string, which should have a number on the end (but doesn't have to)
//R: string, but with the number on the end incremented by 1, and leading 0s respected
//E: foo -> foo1, foo0042 -> foo0043, foo099 -> foo100, foo9 -> foo10, doTest("fo99obar99", "fo99obar100")
//P: detect number, if no number return string + 1
//   detect leading zeros, and if so, how many? we can use this with string length 
//   increase number by 1, and then look to see how we put it back together
//   if leading 0s is 0, then problem remains simpler. 

function incrementString (str) {
    if (!Number.isInteger(Number(str[str.length - 1]))){  //check if string contains number, if not return string1
      return `${str}1`
    }
    
    let l = str.length                           //find total length of string
    let lead0 = 0                                //counter for leading 0s if present
    let numStart = 0                             //str index where number starts
    
    for (i = 0; i < l; i++){                     //finds starting index of number, counting backwards from end of string
      if (!Number.isInteger(Number(str[str.length - 1 - i]))){
        numStart = str.length - i
        break
      }
    }
    
    for (i = numStart; i < l; i++){              //counts leading 0s
      if (str[i] == 0){
        lead0++
      } else {
        break
      }
    }
    
    let stringPart = str.slice(0, numStart)         //holds the string part at the start
    let numberPart = (Number(str.slice(numStart)))  //holds the number at the end
    
    if (Number(numberPart) === 0){                  //catch for 
      return str.slice(0, l - 1) + '1'
    }
    
    let newNumber = numberPart + 1                 //check if we need to remove a leading 0, because number rolled over
    if (String(newNumber).length == String(numberPart).length + 1){
      if (lead0 > 0){
        lead0--
        l++
      }
    }
    
    while(lead0 > 0){           //adding leading 0s back to string
      stringPart += "0"
      lead0--
    }
    
    return String(stringPart + newNumber)
  }

  //for trouble shooting, add this back in
  //console.log(`str length is ${l}, there are ${lead0} leading 0s, the number starts at index ${numStart}. The first part is ${stringPart} and the number is ${numberPart}`)