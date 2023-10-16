function solve(s){
  
    s = s.split(/[bcdfghjklmnpqrstvwxyz]/ig)
    s.sort((a, b)=> b.length - a.length)
    
   return s[0].length
  }