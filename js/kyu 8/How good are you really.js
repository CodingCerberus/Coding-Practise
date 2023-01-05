//PREP
//Params: [class points], your points. your points aren't in the array and you're part of the average
//Returns: true if your points > class points. false otherwise.
//Example: [2, 3], 5), true // 2 + 3 + 5 = 10, 5 > 3.3333 so true
//Psuedo: sum array and own points, then divide by array.length + 1, then check if own points is > class

function betterThanAverage(classPoints, yourPoints) {
    let totalPoints = classPoints.reduce((a, b) => a + b, 0) + yourPoints
    return totalPoints / (classPoints.length + 1) < yourPoints ? true : false
  }