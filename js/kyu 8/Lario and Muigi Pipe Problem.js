//P: array of intergers that ascend
//R: the array with all +1 steps included
//E: [6,9] becomes [6,7,8,9]
//P: Could do a loop and check arr[n+1] is +1 and if not splice in the +1 value
//   A better way, would be to assess the length the array SHOULD be and then just build it from scratch starting with n[0]

function pipeFix(numbers){
    let arrayL = numbers[numbers.length - 1] - numbers[0] + 1
    let start = numbers[0]
    let answer = []
    
    for(i = 0; i < arrayL; i++){
      answer.push(start + i)
    }
    
    return answer
    
  }
