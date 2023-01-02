function solution(str){
    let backward = [];
    for (i = 0; i < str.length; i++){
      backward.unshift(str[i]);
    }
    backward = backward.join('');
    return backward
  }