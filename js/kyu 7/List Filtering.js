function filter_list(l) {
    for (i = 0; i < l.length; i++){
      if ((typeof l[i]) !== "number"){
        l.splice(i , 1)
        i--
      }
    }
    return l
  }