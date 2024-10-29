function filterLongWords(sent, n) {
  
    return sent.split(' ').filter(x => x.length > n)
    
  }
