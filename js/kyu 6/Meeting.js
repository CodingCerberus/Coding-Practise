function meeting(s) {
  
  s = s.split(';')

  for(i = 0; i < s.length; i++){
    s[i] = s[i].split(':')
    s[i].reverse()
    s[i] = s[i].join(', ').toUpperCase()
  }

  s.sort()

  return `(${s.join(')(')})`
  
}
