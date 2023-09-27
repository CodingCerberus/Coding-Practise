function boredom(staff){
  
    let jobs = {
    'accounts': 1,
    'finance': 2,
    'canteen': 10,
    'regulation': 3,
    'trading': 6,
    'change': 6,
    'IS': 8,
    'retail': 5,
    'cleaning': 4,
    'pissing about': 25
    }
    
    let ans = 0
    
    let avgB = Object.values(staff)
  
    for(i = 0; i < avgB.length; i++){
      ans += jobs[avgB[i]]
    }
    
    return ans > 99 ? 'party time!!' :
           ans > 80 ?  'i can handle this' : 'kill me now'
    
  }