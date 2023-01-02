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
    throw new Error("The method or operation is not implemented.");
  }
  
  //should work, but doesn't
  ////except I tried it again, and now it does...
  ////it onl works if the throw new Error is in here at the end????
  
  export function bmi(weight: number, height: number): string {
    let bmiCalc = weight/height**2
    if (bmiCalc <= 18.5){
      return "Underweight"
    } else if (bmiCalc <= 25){
      return "Normal"
    } else if (bmiCalc <= 30){
      return "Overweight"
    } else {
      return "Obese"
    }
  }
  
  //this works fine so the only difference is the last else if?

  ////The reason it works is because the TS compiler does not like ifs without a catch all. You cannot end it with a else if, even if it will never happen!