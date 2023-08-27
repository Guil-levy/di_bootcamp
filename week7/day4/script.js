// 1
// const sumFunct = (a, b) => a + b;
// // sumFunct(2,5);
// console.log(sumFunct(2,5));

// 2/

// // Function Declaration
// console.log(gramsDeclaration(2)); 
// function gramsDeclaration(weightInKg) {
//     return weightInKg * 1000;
//   }
//   // Function Expression
// //   console.log(gramsExpression(3)); 
// const gramsExpression = function(weightInKg) {
//     return weightInKg * 1000;
//   };
//   console.log(gramsExpression(3)); 

//  // Arrow function
// const convertToGramsArrow = weightInKg => weightInKg * 1000;

// // Invoke the function
// // console.log(gramsArrow(4));  
// const gramsArrow = weightInKg => weightInKg * 1000;
// console.log(gramsArrow(4)); 
 

// 3
// ((numberOfChildren, partnerName, geographicLocation, jobTitle) =>
//   console.log(`You will have ${numberOfChildren} children, live in ${geographicLocation}, and work as a ${jobTitle}. Your partner's name is ${partnerName}.`)
// )(2, 'Emma', 'New York', 'Web Developer');

//  3.2
// ((numberOfChildren, partnerName, geographicLocation, jobTitle) => {
//     const sentence = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`;

//     document.getElementById('output').textContent = sentence;
//   })(2, 'Emma', 'New York', 'Web Developer');
  

//   4.2
// const userName = 'John';

// ((userName) => {
//   console.log(`Welcome, ${userName}! You have successfully signed in.`);
// })(userName);

// // 4.3
// ((userName, profilePictureURL) => {
//     const userProfileDiv = document.getElementById('userProfile');
//     const userContent = `
//       <img src="${profilePictureURL}" alt="${userName}'s Profile Picture">
//       <span>${userName}</span>
//     `;
//         userProfileDiv.innerHTML = userContent;
//   })('John', 'profile.jpg');


// 5
// part I/1

function makeJuice(size) {
    const ingredients = [];

    function getSize() {
      if (size === 'small') {
        return 'small';
      } else if (size === 'medium') {
        return 'medium';
      } else {
        return 'large';}
    }   
  
    const beverageSize = getSize();
    console.log(`You ordered a ${beverageSize} beverage. Enjoy!`);
 //   I/2 
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        const beverageSize = getSize();
        const sentence = `The client wants a ${beverageSize} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}.`;
        document.getElementById('juiceInfo').textContent = sentence;
        ingredients.push(ingredient1);
        ingredients.push(ingredient2);
        ingredients.push(ingredient3);
      }
      
      
    function displayJuice() {
    const beverageSize = getSize();
    const sentence = `The client wants a ${beverageSize} juice, containing ${ingredients.join(', ')}.`;
    document.getElementById('juiceInfo').textContent = sentence;
   

  }
    
    addIngredients('banana', 'kiwi', 'mango'); 
    addIngredients('apple', 'orange', 'strawberry');
    console.log('Ingredients:', ingredients);
    displayJuice();
    }

  makeJuice('medium'); 
  

