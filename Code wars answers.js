// 8 kyu
// Sum of positive

function positiveSum(arr) {
  
    let sum = 0;
    
    for (i = 0; i < arr.length; i++){
      
      if (arr[i] > 0){
         sum += arr[i]
      }
    }
  
    return sum
  }


// Remove exclamation marks

  function removeExclamationMarks(s) {
  
    let r = s.replace(/!/g, "")
    
    return r;
  }


// Beginner - Reduce but Grow

function grow(x){
    let result = 1;
    for (i = 0; i < x.length; i++){
      result *= x[i]
    };
    return result
  }

// Keep Hydrated!

function litres(time) {
    let water = Math.floor(time/2);
    return water;
  }

// Total amount of points

  function points(games) {
    let numPoints = 0;
    for (i = 0; i < games.length; i++){
      let x = Number(games[i][0]);
      let y = Number(games[i][2]);
        if (x > y){
          numPoints += 3
        } else if (x == y){
          numPoints += 1
        }
    }
    return numPoints
  }
// Square(n) Sum

  function squareSum(numbers){
    let result = 0
    for (i = 0; i < numbers.length; i++){
      result += numbers[i]**2
    } 
    return result
  }

// Reversed Strings

  function solution(str){
    let backward = [];
    for (i = 0; i < str.length; i++){
      backward.unshift(str[i]);
    }
    backward = backward.join('');
    return backward
  }


// Convert a String to a Number!

const stringToNumber = function(str){
    return Number(str);
}

//  Basic Mathematical Operations

  function basicOp(operation, value1, value2){
    let result = 0;
    if (operation == "+"){
      result = value1 + value2
    } else if (operation == "-"){
      result = value1 - value2
    } else if (operation == "*"){
      result = value1 * value2
    } else if (operation == "/"){
      result = value1 / value2
    }
    return result
  }


// Beginner - Lost Without a Map - deceptively hard

function maps(x){
  const y = [];
  for(i = 0; i < x.length; i++){
    y.push(x[i]*2);
  };
  return y
}


/////////////////////////////
  //Kyu 7
/////////////////////////////

//Descending Order

function descendingOrder(n){
  let sortArray = String(n).split('').sort().reverse();
  let highNumber = "";
  sortArray.forEach( x => highNumber += x);
  return Number(highNumber)
}


//Growth of a Population



function nbYear(p0, percent, aug, p) {
  let n = 0;
  while (p0 < p){
    p0 += Math.floor(p0 * percent / 100 + aug);
    n++
  };
return n
}


//Two to One

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



//Mumbling

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


function accum(s) {
	let newString = [];
  let finishString = []
  for (i = 0; i < s.length; i++){
    newString.push(s[i].toLowerCase());
    };
  for (i = 0; i < s.length; i++){
    newString[i] = newString[i].repeat(i+1)
  };
  for (i = 0; i < s.length; i++){
    finishString.push(newString[i].charAt(0).toUpperCase() + newString[i].slice(1))
  }
     
  return finishString.join('-')
}




//Categorize New Member

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



