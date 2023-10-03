function areAnagrams(str1, str2) {
    const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();
  
    // Check if the lengths are different
    if (cleanStr1.length !== cleanStr2.length) {
      return false;
    }
    // Sort the characters
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');
  
    return sortedStr1 === sortedStr2;
  }
  
  // Example usage:
//   const input1 = "Astronomer";
//   const input2 = "Moon starer";
  //
//   const input1 = "School master" 
//   const input2 = "The classroom"
//   //
  const input1 = "The Morse Code" 
  const input2 = "Here come dotsU(it's in japanese)"
  
  if (areAnagrams(input1, input2)) {
    console.log(`${input1} and ${input2} are anagrams.`);
  } else {
    console.log(`${input1} and ${input2} are not anagrams.`);
  }
  