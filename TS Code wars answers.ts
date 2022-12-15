//Kyu 8

//Grasshopper - Debug sayHello

export function sayHello(name: string): string {
    return `Hello, ${name}`
  }

//Will you make it?

export const zeroFuel = (distance: number, mpg: number, fuelLeft: number): boolean => {
  if(mpg * fuelLeft >= distance){
    return true
  } else {
    return false
  }
};

//Difference of Volumes of Cuboids

export function findDifference(a: [number, number, number], b: [number, number, number]): number{
  let cubeA: number = a[0]*a[1]*a[2]
  let cubeB: number = b[0]*b[1]*b[2]
  if (cubeA > cubeB){
    return cubeA - cubeB
  } else {
    return cubeB - cubeA
}
}

////same again but in one line of code as it requests

export function findDifference(a: [number, number, number], b: [number, number, number]): number{
  return a[0]*a[1]*a[2] > b[0]*b[1]*b[2] ? a[0]*a[1]*a[2] - b[0]*b[1]*b[2] : b[0]*b[1]*b[2] - a[0]*a[1]*a[2]
}

////one more time once I found out about Math.abs()

export function findDifference(a: [number, number, number], b: [number, number, number]): number{
  return Math.abs(a[0]*a[1]*a[2]-b[0]*b[1]*b[2])
}

//Quarter of the year

export function quarterOf(month: number): number {
  return Math.ceil(month/3)
}

//What is between?

export function between(a: number, b: number): number[] {
  let newArr = []
  for (let i = a; i <= b; i++){
    newArr.push(i)
  }
  return newArr
}

//L1: Set Alarm

export function setAlarm(employed: boolean, vacation: boolean) {
  return employed === true && vacation === false ? true : false
}

//Count of positives / sum of negatives

export function countPositivesSumNegatives(input: any) {
  if (input == null || input == [] || input == ""){
    return []
  } else {
    let newArr = [0, 0]
    for (let i = 0; i < input.length; i++){
      if(input[i] > 0){
        newArr[0]++
      } else {
        newArr[1] += input[i]
      }
    }
    return newArr
  }
  
}


//Calculate BMI

export function bmi(weight: number, height: number): string {
  let bmiCalc = weight/height**2
  if (bmiCalc <= 18.5){
    return "Underweight"
  } else if (bmiCalc <= 25){
    return "Normal"
  } else if (bmiCalc <= 30){
    return "Overweight"
  } else if (bmiCalc > 30){
    return "Obese"
  }
}