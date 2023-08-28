function grabDoll(dolls){
  var bag=[];
  
  for(i = 0; i < dolls.length; i++){
    
    if(bag.length > 2){
      break
    }
    
    if(dolls[i] == 'Hello Kitty' || dolls[i] == 'Barbie doll'){
      bag.push(dolls[i])
    }else{
      continue
    }
  }
  
  return bag;
}
