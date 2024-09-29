function nicknameGenerator(name){
  
    if(name.length < 4){
      return "Error: Name too short"
    }
    
    let vowels = /[aeiou]/
    
    return vowels.test(name[2]) ? name.slice(0, 4) : name.slice(0, 3)
    
  }
