function sumTwoSmallestNumbers(numbers) {
  
  numbers.sort((a, b) => a - b)
  
  return numbers[1] + numbers[0]
  
}
