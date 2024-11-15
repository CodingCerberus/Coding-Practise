function circleArea(radius) {
  
    if(radius <= 0){
      throw new Error("Number equal to or less then 0")
    }
    
    return Math.PI * radius ** 2
    
  }
