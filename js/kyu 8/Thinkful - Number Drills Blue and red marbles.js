function guessBlue(blueS, redS, blueP, redP) {
  
  return ((100 / ((blueS - blueP) + (redS - redP))) * (blueS - blueP)) / 100
  
}
