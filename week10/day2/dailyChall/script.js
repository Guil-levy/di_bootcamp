// 1rst Daily Challenge


// function areAllStrings(array) {
//     return array.every((item) => typeof item === 'string');
//   }
  
//   function makeAllCaps(words) {
//     return new Promise((resolve, reject) => {
//       if (areAllStrings(words)) {
//         const capitalizedWords = words.map((word) => word.toUpperCase());
//         resolve(capitalizedWords);
//       } else {
//         reject('Input contains non-string elements');
//       }
//     });
//   }
  
//   const wordsArray = ['hello', 'world', 'javascript'];
  
//   makeAllCaps(wordsArray)
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
  
// function sortWords(words) {
//     return new Promise((resolve, reject) => {
//       if (words.length > 4) {
//         const sortedWords = [...words].sort();
//         resolve(sortedWords);
//       } else {
//         reject('Array length is not greater than 4');
//       }
//     });
//   }
  
//   const uppercaseWords = ['APPLE', 'BANANA', 'CHERRY', 'DATE', 'GRAPE'];
  
//   sortWords(uppercaseWords)
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.error(error); 
//     });
  
// 2nd Daily Challenge
const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`
 
  //convert
  function toJs() {
    return new Promise((resolve, reject) => {
      try {
        const morseObject = JSON.parse(morse);
        if (Object.keys(morseObject).length === 0) {
          reject('Morse object is empty');
        } else {
          resolve(morseObject);
        }
      } catch (error) {
        reject(error);
      }
    });
  }
  
  // translate
  function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
      const userInput = prompt('Enter a word or sentence:');
      if (!userInput) {
        reject('No input provided');
        return;
      }
  
      const translation = [];
      for (const char of userInput.toLowerCase()) {
        if (morseJS[char]) {
          translation.push(morseJS[char]);
        } else {
          reject(`Character '${char}' not found in morse code`);
          return;
        }
      }
      resolve(translation);
    });
  }
  
  //join and display
  function joinWords(morseTranslation) {
    const result = morseTranslation.join(' ');
    console.log(result);
  }
  
  // Chain
  toJs()
    .then(toMorse)
    .then(joinWords)
    .catch((error) => {
      console.error(error);
    });
  