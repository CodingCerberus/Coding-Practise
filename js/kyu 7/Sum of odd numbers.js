//P:a number, that represents the row in a pyramid of odd numbers
//R:sum of numbers in row n
//E:2 = n, 3 + 5 = 8. n= 3, 7 + 9 + 11 = 27
//P: tricky problem that would involve some complex maths, but if we look at the relationship between the nums that come out
//   we can see they are n**3, so the problem becomes easy

function rowSumOddNumbers(n) {
    return n**3
  }

