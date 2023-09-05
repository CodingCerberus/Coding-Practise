function aliasGen(x, y){
  
    if(x == 'Mike' && y == 'Millington'){
      return"Malware Mike" 
    } else if(x == 'Larry' && y == 'Brentwood'){
      return 'Logic Bomb'
    } else if (x == 'Fahima' && y == 'Tash'){
      return 'Function T-Rex'
    } else if (x == 'Daisy' && y == 'Petrovic'){
      return 'Data Payload'
    } else if (/^[A-Z]/i.test(x) && /^[A-Z]/i.test(y)){
      return x + y
    } else{
      "Your name must start with a letter from A - Z."
    }
    
  }