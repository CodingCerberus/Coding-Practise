var greet = function(name) {

  name = name.toLowerCase()
  
  return `Hello ${name.charAt(0).toUpperCase() + name.slice(1)}!`
  
}
