// P: Array of strings
// R: The first value of the sorted array, which then has it's letters delimited by "***"
// E: ["take", "over", "the", "world", "maybe", "bitcoin", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' 
// P: use .sort on the array, then pass arr[0] to a variable for sake of ease
//    then, lets split it into it's own array, then join it with our given delimiter

function twoSort(s) {
    s.sort()
    let answer = s[0]
    answer = answer.split("")
    answer = answer.join("***")
    return answer
  }