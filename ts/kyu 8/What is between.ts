export function between(a: number, b: number): number[] {
    let newArr = []
    for (let i = a; i <= b; i++){
      newArr.push(i)
    }
    return newArr
  }