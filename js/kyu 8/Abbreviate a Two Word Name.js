function abbrevName(name){
    name = name.toUpperCase();
  
    name = name.split(' ');
  
   return `${name[0][0]}.${name[1][0]}`
  };