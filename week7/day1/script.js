// Write a function called pangrams that will
// take one string, s as input.
// A pangram is a sentence that contains
// every letter of the alphabet.
// The goal of this function is to determine
// if the sentence given is a pangram or not.
// If it is not a pangram, the function will return not pangram.
// If it is a pangram,
// the function will return pangram. Here is an example:
// "The quick brown fox jumps over the lazy dog"
// "We promptly judged antique ivory buckles for the prize"
// x is missing

function isPangram(sentence) {
    const alphabet = new Set('abcdefghijklmnopqrstuvwxyz');
    const sentenceLower = sentence.toLowerCase();

    for (const char of sentenceLower) {
        if (/[a-z]/.test(char)) {
            alphabet.delete(char);
        }
    }

    return alphabet.size === 0;
}

// Test the function
const inputSentence = "The quick brown fox jumps over the lazy dog";
if (isPangram(inputSentence)) {
    console.log("It's a pangram!");
} else {
    console.log("It's not a pangram.");
}

console.log(isPangram(inputSentence));