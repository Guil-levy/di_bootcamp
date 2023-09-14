// function countVowels(sentence) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;
  
//     sentence.toLowerCase().split('').forEach(char => {
//         if (vowels.includes(char)) {
//           count++;
//         }
//       });
//     return count;
//   }
//   const sentence = "Hi, my name is Guil, and I'm 38 years old";
//   const vowelCount = countVowels(sentence);
//   console.log(vowelCount); 

//   const sentence2 = "It's raining man, Halleluya";
//   const vowelCount2 = countVowels(sentence2);
//   console.log (vowelCount2)

// ------------------------

const compareToTen = (num) =>{
   
    return new Promise((resolve, reject)=>{
    if(num>10) 
    { resolve (`${num} is greater than 10`)}
    }else{
    return reject(`${num} is less than 10`)
            
    });
}


compareToTen(11)
    .then(resolve =>
{
console.log(resolve);
})  
.catch(err =>{console.log(err);})
  
  
  