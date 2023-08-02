// // Exercice1: List of people

// var people = ["Greg", "Mary", "Devon", "James"];

// people.shift();
// console.log(people);

// people.splice(2,1,'Jason');
// console.log(people);

// // 3/

// people.push("YourName");
// console.log(people);

// // 4/

// const maryIndex = people.indexOf("Mary");
// console.log(maryIndex);

// // 5/

// const copyPeople = people.splice(1,2);
// console.log(copyPeople);

// // 6/

// console.log(people.indexOf("Foo"));
// //-1 because there is no Foo in the array.

// // 7/

// const last = people[people.length - 1];
// console.log(last);

// // PART II ( *** I had to use a VAR to make it work..***)
// var people = ["Greg", "James", "Mary", "Devon", "Yourname"];
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
//   } 


// // 2/
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
//     if (people[i] === "Devon") {
//       break;
//     }
//   }

// Exercice2

// const colors = ["blue", "red", "green", "yellow", "purple"];
// for (let i = 0; i < colors.length; i++) {
//     console.log("My #" + (i + 1) + " choice is " + colors[i]);
//   }

// // Exercice3 // //not working
// //  1/
// let userInput= prompt("Please choose a number :");
//     const number = typeof userInput();
//     console.log(number);

// // typeof userInput();


//     // userInput= prompt("Please choose a number :");
// // } while {typeof (userInput) < 10};




// Exercice4

// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }

// // 2/
// console.log(building.numberOfFloors);
// // 3/
// console.log(building.numberOfAptByFloor.firstFloor);
// console.log(building.numberOfAptByFloor.thirdFloor);
// // 4/
// console.log(building.nameOfTenants[1]);
// console.log(building.numberOfRoomsAndRent.dan[0]);
// // 5/
// const sarahRent = building.numberOfRoomsAndRent.sarah[1];
// const davidRent = building.numberOfRoomsAndRent.david[1];
// const danRent = building.numberOfRoomsAndRent.dan[1];

// if (sarahRent + davidRent > danRent) {
//   building.numberOfRoomsAndRent.dan[1] = 1200;
// }

// console.log(building.numberOfRoomsAndRent);

// // Exercice5


// // Exercice6 *something wrong, i don't get the Keys,only the values
// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
//   }
//   let sentence = '';
//   for (let key in details) {
//     sentence += details[key] + ' ';
//   }
//   console.log(sentence);


// //   Exercice7
// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// const firstLetters = [];
// for (let i = 0; i < names.length; i++) {
//     const firstLetter = names[i][0];
//     firstLetters.push(firstLetter);
// }
// firstLetters.sort();
// const societyName = firstLetters.join('')
// console.log(societyName);