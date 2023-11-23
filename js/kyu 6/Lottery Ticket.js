function bingo(ticket, win){
  
    let smallWin = 0
    
    for(i = 0; i < ticket.length; i++){
      ticket[i][1] = String.fromCharCode(ticket[i][1])
      
      if(ticket[i][0].includes(ticket[i][1])){
        smallWin++
      }
    } 
      return win <= smallWin ? 'Winner!' : 'Loser!'
  }