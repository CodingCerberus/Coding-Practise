function shark(pDist, sDist, uSpeed, sSpeed, dolp){

  if(dolp == true){
    sSpeed *= 0.5
  }
  
  return (pDist / uSpeed) > (sDist / sSpeed) ? "Shark Bait!" : "Alive!"
  
}
