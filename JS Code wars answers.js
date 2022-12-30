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

//A Needle in the Haystack

function findNeedle(haystack) {
  for(i = 0; ; i++){
    if (haystack[i] === 'needle'){
      return `found the needle at position ${i}`
    }
  }
}


//Grasshopper - Check for factor

function checkForFactor (base, factor) {
  return base % factor == 0
}


//The Feast of Many Beasts

  function feast(beast, dish) {
    return ((beast[0] == dish[0]) && (beast[beast.length - 1] == dish[dish.length - 1]))
  }


//Beginner Series #4 Cockroach

function cockroachSpeed(s) {
  return Math.floor(s*10000/360)
}

//Sum Mixed Array

  function sumMix(x){
    let result = 0
    for(i = 0; i < x.length; i++){
      result += Number(x[i])
    }
    return result
  }


//All Star Code Challenge #18

function strCount(str, letter){
  let count = 0
  str = str.split("")
  str.forEach(x => {
    if(x == letter){
      count++
    }
  })
  return count
}



//Calculate average


function findAverage(array) {
  if (array.length == 0){
    return 0
  } else {
  return ((array).reduce((a, b) => a + b, 0))/array.length
    }
}


//Counting sheep...

function countSheeps(arrayOfSheep) {
  let trueCount = 0
  for (i=0;i<arrayOfSheep.length;i++){
    if (arrayOfSheep[i] == true){
      trueCount++
    }
  }
  return trueCount
}

//Are You Playing Banjo?

function areYouPlayingBanjo(name) {
  if ((name[0] == "r")||(name[0] == "R")){
    return `${name} plays banjo`
  } else {
    return `${name} does not play banjo`
  }
}

//Find the smallest integer in the array

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}


//Is he gonna survive?

function hero(bullets, dragons){
  return (bullets / 2 >= dragons) ? true : false
}

//Simple multiplication

  function simpleMultiplication(number) {
    if (number%2 == 0){
      return number * 8
    } else {
      return number * 9
    }
  }

//Thinkful - Logic Drills: Traffic light

  function updateLight(current) {
    if (current == "green"){
      return "yellow"
    } else if (current == "yellow"){
      return "red"
    } else if (current == "red"){
     return "green" 
    }
    }

//  Sum without highest and lowest number

function sumArray(array) {
  if ((array == []) || (array == null) || (array.length < 3)){
    return 0
  } else {
  let initialValue = 0
  let sum = 0
  let maxxC = Math.max(...array)
  let minnC = Math.min(...array)
  sum = array.reduce((a, b) => a + b, initialValue) - maxxC - minnC
  return sum
    }
}

//Transportation on vacation

function rentalCarCost(d) {
  if(d >= 7){
    return d*40-50
  } else if (d >= 3){
    return d*40-20
  } else {
    return d*40
  }
}

//Reversed sequence

const reverseSeq = n => {
  let newArr = []
  for (i = 1; i <= n; i++){
    newArr.unshift(i)
  }
  return newArr
};


//Sum Arrays

function sum (numbers) {
  if (numbers == []){
    return 0
  } else {
  let sum = 0
  for (i = 0; i < numbers.length; i++){
    sum += numbers[i]
  }
return sum
    }
}

function sum (numbers) {
  if (numbers == []){
    return 0
  } else {
  const initialValue = 0;
  const sum = numbers.reduce(
  (a, b) => a + b, initialValue);
    return sum
    }
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


//Convert a Boolean to a String

function booleanToString(b){
  return String(b)
}

//String repeat

function repeatStr (n, s) {
  s = s.repeat(n);
  return s
}

//Fake Binary

function fakeBin(x){
  x = x.replace(/1/g, "0");
 x = x.replace(/2/g, "0");
  x = x.replace(/3/g, "0");
  x = x.replace(/4/g, "0");
  x = x.replace(/5/g, "1");
  x = x.replace(/6/g, "1");
  x = x.replace(/7/g, "1");
  x = x.replace(/8/g, "1");
  x = x.replace(/9/g, "1");
  return x
}

//Count by X

function countBy(x, n) {
  let z = [];
  for (i = 1; i <= n; i++){
    z.push(i*x);
  } 
  return z;
}

//Opposite number

function opposite(number) {
  return -number
}

//Convert a string to an array

function stringToArray(string){
  return string.split(' ');
}


//Grasshopper - Grade book

function getGrade (s1, s2, s3) {
  let averageG = (s1 + s2 + s3)/3;
  if (averageG < 60){
    return "F"
  } else if (averageG < 70){
    return "D"
  } else if (averageG < 80){
    return "C"
  } else if (averageG < 90){
    return "B"
  } else if (averageG <= 100){
    return "A"
  }
}


//Invert values

function invert(array) {
  let invertArr = array.map(x => x * -1)
   return invertArr;
}


//Grasshopper - Summation

var summation = function (num) {
  let result = num;
  for (i = 1; i < num; i++){
    result += i
  }
  return result
  }



//Abbreviate a Two Word Name

function abbrevName(name){
  name = name.toUpperCase();

  name = name.split(' ');

 return `${name[0][0]}.${name[1][0]}`
};



////this solution works in browser, but not in the tests for some reason.

const reply = {
  english: 'Welcome',
  czech: 'Vitejte',
  danish: 'Velkomst',
  dutch: 'Welkom',
  estonian: 'Tere tulemast',
  finnish: 'Tervetuloa',
  flemish: 'Welgekomen',
  french: 'Bienvenue',
  german: 'Willkommen',
  irish: 'Failte',
  italian: 'Benvenuto',
  latvian: 'Gaidits',
  lithuanian: 'Laukiamas',
  polish: 'Witamy',
  spanish: 'Bienvenido',
  swedish: 'Valkommen',
  welsh: 'Croeso'
  }
  
function greet(language) {

  console.log(reply[language])
  return reply[language]
  
}


//Twice as old

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2)
}


//If you can't sleep, just count sheep!!

var countSheep = function (num){
  let reply = ""
  for (i = 1; i <= num; i++){
    reply += `${i} sheep...`
  }
  return reply
}


//Remove String Spaces

function noSpace(x){
  return x.split(' ').join('')
}


//Rock Paper Scissors!

const rps = (p1, p2) => {
  if (p1 == p2){
    return "Draw!"
  } else if (((p1 == "scissors")&&(p2 == "paper")) || ((p1 == "paper") && (p2 == "rock")) || ((p1 == "rock") && (p2 == "scissors"))){
    return "Player 1 won!"
  } else {
    return "Player 2 won!"
  }
};

//Volume of a Cuboid

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height
  }
}


//You only need one - Beginner

function check(a, x) {
  let result = false
  for(i = 0; i < a.length; i++){
    if(a[i] === x){
      result = true
    }
  }
  return result
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


//Testing 1-2-3

var number=function(array){
  let newArr = array
  for(i = 0; i < array.length; i++){
    array[i] = `${i + 1}: ${array[i]}`
  }
  return newArr
}

//Count the divisors of a number

function getDivisorsCnt(n){
  let factors = 0
    for(i = 1; i <= n; i++){
      if(n % i == 0){
        factors++
      }
    }
  return factors
}

//Beginner Series #3 Sum of Numbers

function getSum( a,b ){
  if (a == b){
    return a
  } else if (a > b){
    let result = 0
    for (i = b; i <= a; i++){
      result += i
      }
    return result
    } else {
    let result = 0
    for (i = a; i <= b; i++){
      result += i
      }
    return result
    }
  
  }


//Sum of the first nth term of Series

function SeriesSum(n){
  let result = 0
  let divider = 1
  for (i = 1; i <= n; i++){
    result += 1/divider
    divider += 3
  }
  return result.toFixed(2)
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


// You're a square!

var isSquare = function(n){
  return Number.isInteger(Math.sqrt(n))
}



//Highest and Lowest

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


//Square Every Digit

function squareDigits(num){
  num = String(num);
  num = num.split("");
  for (i = 0; i < num.length; i++){
    num[i] = Number(num[i]) * Number(num[i])
  }
  return Number(num.join(""));
}

//The highest profit wins!

function minMax(arr){
  let profitArr = []
  profitArr.push(Math.min(...arr));
  profitArr.push(Math.max(...arr));
  return profitArr
}


//Number of People in the Bus

var number = function(busStops){
  let people = 0;
  for (i = 0; i < busStops.length; i++){
    people += busStops[i][0];
    people -= busStops[i][1]
  }
  return people
}


//Reverse words

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


//Printer Errors 
///regex

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


//Friend or Foe?

function friend(friends){
  for (i = 0; i < friends.length; i++){
    if (friends[i].length !== 4){
      friends.splice([i], 1)
      i--
    }
  }
  return friends
}

//Kyu 6

//Counting Duplicates

//first attempt, did not account for multiple of same letters in string
function duplicateCount(text){
  let maxC = text.length;
  text = text.toLowerCase();
  let arr = new Set(text);
  return maxC - arr.size
}

function duplicateCount(text){
  text = text.toLowerCase().split('').sort();
  let dupeCount = 0;
  for (i = 0; i < text.length; i++){
    if (text[i] == text[i+1]){
      dupeCount++;
      while (text[i] == text[i+1]){
        text.splice(text[i+1], 1)
      }
    }
  };
  return dupeCount;
}


//Find the unique number
///array is sliced to reduce size for very long arrays
///then called only once to make a small Object to get the different values for max and min

function findUniq(arr) {
  const cake = arr.slice(0, 3);
  let settled = [...new Set(arr)]
  
  let a = Math.min(...settled);
  let b = Math.max(...settled);
  
  let x = cake[0]
  let y = cake[1]
  let z = cake[2]
  
  if ((x == a)&&(y == a)){
    return b
  } else if ((x == b)&&(y == b)){
    return a
  } else if ((y == a)&&(z == a)){
    return b
  } else if ((y == b)&&(z == b)){
    return a
  } else if ((x == a)&&(z == a)){
    return b
  } else {
    return a
  }
}


//Unique In Order

var uniqueInOrder=function(iterable){
  if ((typeof iterable) == "string"){
    //string function
    let newArr = iterable.split("")
    for (i = 0; i < newArr.length; i++){
      if (newArr[i] == newArr[i+1]){
        newArr.splice([i+1], 1)
        i--
      }
    }
    return newArr
  } else {
    //array function
    let newArr = iterable
    for (i = 0; i < newArr.length; i++){
      if (newArr[i] == newArr[i+1]){
        newArr.splice([i+1], 1)
        i--
      }
    }
    return newArr
  }
}

///refactored
var uniqueInOrder=function(iterable){
  let newArr
  if ((typeof iterable) == "string"){
    newArr = iterable.split("")
  } else {
    newArr = iterable
  }
    for (i = 0; i < newArr.length; i++){
      if (newArr[i] == newArr[i+1]){
        newArr.splice([i+1], 1)
        i--
      }
    }
    return newArr
  }



//Count the smiley faces!

function countSmileys(arr) {
  let count = 0
  arr.forEach(x => {
    if ((x.startsWith(':')) || (x.startsWith(';'))){
      if ((x.endsWith('\)')) || (x.endsWith('D'))){
        if(x.length === 2){
        count++
        } else if (x.length === 3){
          if ((x[1] == "-") || (x[1] == "~")){
            count++
          }
        }
      }
    }
  })
  return count
}