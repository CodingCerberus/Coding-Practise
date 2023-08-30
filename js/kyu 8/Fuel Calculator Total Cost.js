function fuelPrice(lit, price) {
  
  return lit >= 10 ? Number((lit * (price - 0.25)).toFixed(2)) :
         lit >= 8 ? Number((lit * (price - 0.20)).toFixed(2)) :
         lit >= 6 ? Number((lit * (price - 0.15)).toFixed(2)) :
         lit >= 4 ? Number((lit * (price - 0.10)).toFixed(2)) :
         lit >= 2 ? Number((lit * (price - 0.05)).toFixed(2)) : Number((lit * price).toFixed(2))
  
}
