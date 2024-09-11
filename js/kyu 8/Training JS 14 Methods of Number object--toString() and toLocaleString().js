function colorOf(r,g,b){
  
    let red = r.toString(16)
    let green = g.toString(16)
    let blue = b.toString(16)
    
    console.log(red)
    console.log(green)
    console.log(blue)
    
    
    return "#" + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
    
  }
