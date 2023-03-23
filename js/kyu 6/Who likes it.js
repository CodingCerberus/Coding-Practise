function likes(n) {
    return n.length < 1 ? "no one likes this" :
            n.length == 1 ? n[0] + " likes this" :
            n.length == 2 ? n[0] + " and " + n[1] + " like this" :
            n.length == 3 ? n[0] + ", " + n[1] + " and " + n[2] + " like this" : n[0] + ", " + n[1] + " and " + (n.length - 2) + " others like this"
  }