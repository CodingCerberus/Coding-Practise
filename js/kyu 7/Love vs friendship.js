function wordsToMarks(string){
  
  let ans = 0
  
  for(i = 0; i < string.length; i++){
    if(string[i] == 'a'){
      ans += 1
    } else if(string[i] == 'b'){
      ans += 2
    } else if(string[i] == 'c'){
      ans += 3
    } else if(string[i] == 'd'){
      ans += 4
    } else if(string[i] == 'e'){
      ans += 5
    } else if(string[i] == 'f'){
      ans += 6
    } else if(string[i] == 'g'){
      ans += 7
    } else if(string[i] == 'h'){
      ans += 8
    } else if(string[i] == 'i'){
      ans += 9
    } else if(string[i] == 'j'){
      ans += 10
    } else if(string[i] == 'k'){
      ans += 11
    } else if(string[i] == 'l'){
      ans += 12
    } else if(string[i] == 'm'){
      ans += 13
    } else if(string[i] == 'n'){
      ans += 14
    } else if(string[i] == 'o'){
      ans += 15
    } else if(string[i] == 'p'){
      ans += 16
    } else if(string[i] == 'q'){
      ans += 17
    } else if(string[i] == 'r'){
      ans += 18
    } else if(string[i] == 's'){
      ans += 19
    } else if(string[i] == 't'){
      ans += 20
    } else if(string[i] == 'u'){
      ans += 21
    } else if(string[i] == 'v'){
      ans += 22
    } else if(string[i] == 'w'){
      ans += 23
    } else if(string[i] == 'x'){
      ans += 24
    } else if(string[i] == 'y'){
      ans += 25
    } else if(string[i] == 'z'){
      ans += 26
    }
  }
  
  return ans
  
}
