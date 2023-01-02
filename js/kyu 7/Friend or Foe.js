function friend(friends){
    for (i = 0; i < friends.length; i++){
      if (friends[i].length !== 4){
        friends.splice([i], 1)
        i--
      }
    }
    return friends
  }