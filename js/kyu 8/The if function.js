function _if(bool, func1 = function(){console.log("This Kata kinda bad fr")}, func2 = function(){console.log("This Kata still kinda bad fr fr no cap")}){

    return bool ? func1(): func2()
  }
