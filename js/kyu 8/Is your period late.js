function periodIsLate(last, today, cycleLength) {
  
    var diff = Math.floor((Date.parse(today) - Date.parse(last)) / 86400000);
    
    return diff > cycleLength;
  }
