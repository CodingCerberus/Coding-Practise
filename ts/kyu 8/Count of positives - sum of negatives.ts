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