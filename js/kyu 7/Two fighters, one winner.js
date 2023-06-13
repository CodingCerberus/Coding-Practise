function declareWinner(fighter1, fighter2, firstAttacker) {
  
  if (fighter2.name == firstAttacker){
  fighter1.health -= fighter2.damagePerAttack
    if(fighter1.health <= 0){
      return fighter2.name
    }
  }
  
  while(fighter1.health > 0 || fighter2.health > 0){
    fighter2.health -= fighter1.damagePerAttack
    if(fighter2.health <= 0){
      return fighter1.name
    }
    fighter1.health -= fighter2.damagePerAttack
    if(fighter1.health <= 0){
      return fighter2.name
    }
  }
  
}
