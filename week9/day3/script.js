// You are tasked with writing a function `solution` that takes a string `S` as input. 
// The string consists of 'a' and/or 'b' characters. 
// The function should return `true` if all occurrences 
// of the letter 'a' appear before all occurrences 
// of the letter 'b' in the string `S`. 
// If either 'b' does not occur in `S` or 'a' does not occur in `S`, 
// the function should also return `true`. 
// Otherwise, it should return `false`.


// aabb - true
// bbaa - flase
// aaa - true
// bbb - true
// ababa - flase

arr = [];
function solution(S) {
    let foundB = false;// set to false

    for (let i = 0; i < S.length; i++) {
      if (S[i] === 'b') {
        foundB = true;// true if you find a b
      } else if (S[i] === 'a' && foundB) { // find a after you find a B
        return false; //
      }
    }
  
    return true;
}