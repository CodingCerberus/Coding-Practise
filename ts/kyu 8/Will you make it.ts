export const zeroFuel = (distance: number, mpg: number, fuelLeft: number): boolean => {
    if(mpg * fuelLeft >= distance){
      return true
    } else {
      return false
    }
  };