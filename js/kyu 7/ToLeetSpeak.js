function toLeetSpeak(str) {
  
    let lD = {
    A : '@',
    B : '8',
    C : '(',
    D : 'D',
    E : '3',
    F : 'F',
    G : '6',
    H : '#',
    I : '!',
    J : 'J',
    K : 'K',
    L : '1',
    M : 'M',
    N : 'N',
    O : '0',
    P : 'P',
    Q : 'Q',
    R : 'R',
    S : '$',
    T : '7',
    U : 'U',
    V : 'V',
    W : 'W',
    X : 'X',
    Y : 'Y',
    Z : '2'
  }
    
    str = str.split('')
    let regex = /[A-Z]/i
    
    for(i = 0; i < str.length; i++){
      if(regex.test(str[i])){
        str[i] = lD[str[i]]
      }
    }
    
    return str.join('');
  }
