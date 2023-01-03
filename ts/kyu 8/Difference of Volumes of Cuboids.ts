// export function findDifference(a: [number, number, number], b: [number, number, number]): number{
//     let cubeA: number = a[0]*a[1]*a[2]
//     let cubeB: number = b[0]*b[1]*b[2]
//     if (cubeA > cubeB){
//       return cubeA - cubeB
//     } else {
//       return cubeB - cubeA
//   }
//   }

// //in one line as requested

//   export function findDifference(a: [number, number, number], b: [number, number, number]): number{
//     return a[0]*a[1]*a[2] > b[0]*b[1]*b[2] ? a[0]*a[1]*a[2] - b[0]*b[1]*b[2] : b[0]*b[1]*b[2] - a[0]*a[1]*a[2]
//   }

// ////one more time once I found out about Math.abs()

export function findDifference(a: [number, number, number], b: [number, number, number]): number{
    return Math.abs(a[0]*a[1]*a[2]-b[0]*b[1]*b[2])
  }