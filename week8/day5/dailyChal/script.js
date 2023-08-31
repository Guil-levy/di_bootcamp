// function removeSpacesAndLowerCase(str) {
//     return str.split(' ').join('').toLowerCase();
//   }
  
//   function areAnagrams(string1, string2) {
//     const cleanString1 = removeSpacesAndLowerCase(string1);
//     const cleanString2 = removeSpacesAndLowerCase(string2);

//     const sortedString1 = cleanString1.split('').sort().join('');
//     const sortedString2 = cleanString2.split('').sort().join('');
//     const isAnagram = sortedString1 === sortedString2;
    
//     const span = document.createElement('span');
//   span.innerHTML = isAnagram ? `${string1} is an anagram of <strong>${string2}</strong>.  ` : '';
//   document.body.appendChild(span);
// }
//   areAnagrams("Astronomer", "Moon starer");
//   areAnagrams("School master", "The classroom");
//   areAnagrams("The Morse Code", "Here come dots");
  
// ---------------------
class AnagramChecker {
    constructor(string1, string2) {
      this.string1 = string1;
      this.string2 = string2;
    }
  
    removeSpacesAndLowerCase(str) {
      return str.split(' ').join('').toLowerCase();
    }
  
    areAnagrams() {
      const cleanString1 = this.removeSpacesAndLowerCase(this.string1);
      const cleanString2 = this.removeSpacesAndLowerCase(this.string2);

      const sortedString1 = cleanString1.split('').sort().join('');
      const sortedString2 = cleanString2.split('').sort().join('');
      return sortedString1 === sortedString2;
    }
  
    displayResult() {
      const span = document.createElement('span');
      if (this.areAnagrams()) {
        span.innerHTML = `${this.string1} is an anagram of <strong>${this.string2}</strong>.  `;
      } else {
        span.textContent = '';
      }
      document.body.appendChild(span);
    }
  }
  
  const anagramChecker4 = new AnagramChecker("Guilgoul", "goulgilu");
  anagramChecker4.displayResult();

  const anagramChecker1 = new AnagramChecker("Astronomer", "Moon starer");
  anagramChecker1.displayResult();
  
  const anagramChecker2 = new AnagramChecker("School master", "The classroom");
  anagramChecker2.displayResult();
  
  const anagramChecker3 = new AnagramChecker("The Morse Code", "Here come dots");
  anagramChecker3.displayResult();
  