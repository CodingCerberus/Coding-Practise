function bandNameGenerator(str) {
  
    str = str.split('')
    str[0] = str[0].toUpperCase()
    str = str.join('')
  
  if(str[0].toLowerCase() == str[str.length - 1]){
    let holder = str.split('')
    holder.shift()
    holder = holder.join('')
    return str + holder
  }
  
  return 'The ' + str
  
}
