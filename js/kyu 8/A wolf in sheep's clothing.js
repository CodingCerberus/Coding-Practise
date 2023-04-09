function warnTheSheep(queue) {
    let wolfPos = queue.indexOf("wolf")
    
    return wolfPos === queue.length - 1 ? "Pls go away and stop eating my sheep" :
                                          `Oi! Sheep number ${queue.length - wolfPos - 1}! You are about to be eaten by a wolf!`
  }