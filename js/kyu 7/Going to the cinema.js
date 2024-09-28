function movie(card, ticket, perc) {
  
    let systemA = ticket
    let systemB = card + (ticket * perc)
    let lastTicketP = (ticket * perc)
    let trips = 1
    
    while(Math.ceil(systemB) >= systemA){
      trips++
      systemA += ticket
      systemB += (lastTicketP * perc)
      lastTicketP = (lastTicketP * perc)
      
    }
  
    return trips
  
  };
