function calculateTip(amount, rating) {

  rating = rating.toLowerCase()
  
  let tipP = 0
  
  if(rating == "excellent"){
    tipP = 20
  } else if(rating == "great"){
    tipP = 15
  } else if(rating == "good"){
    tipP = 10
  } else if(rating == "poor"){
    tipP = 5
  } else if(rating == "terrible"){
    tipP = 0
  } else {
    return 'Rating not recognised'
  }
  
  return Math.ceil(amount * tipP / 100)
  
}
