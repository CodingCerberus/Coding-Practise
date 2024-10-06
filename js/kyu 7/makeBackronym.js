//preload variable: dict

var makeBackronym = function(string){
  
    let ans = []
    
    string = string.split('')
    
    for(i = 0; i < string.length; i++){
      let getter = string[i].toUpperCase()
      ans.push(dict[getter])
    }
    
    return ans.join(' ')
  };
