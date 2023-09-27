function outed(meet, boss){
  
    let groupF = Object.values(meet)
    
    let cCount = groupF.length
    
    groupF = groupF.reduce((a, b)=> a + b, 0) + meet[boss]
    
    return groupF/cCount > 5 ? 'Nice Work Champ!' : 'Get Out Now!'
    
  }