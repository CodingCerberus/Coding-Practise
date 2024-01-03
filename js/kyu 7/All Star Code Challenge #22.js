function toTime(s) {
  
    let h = Math.floor(s / 3600)
    let m = Math.floor((s % 3600)/60)
  
    return `${h} hour(s) and ${m} minute(s)`
    
  }
