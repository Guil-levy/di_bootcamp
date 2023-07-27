// EXERCICE1

// function infoAboutMe() {
//     const name = "Guil"; 
//     const age = 3000; 
//     const hobbies = ["reading", "gaming", "cooking"];
  
//     console.log(`Hello! My name is ${name}. I am ${age} years old, and my hobbies are ${hobbies.join(", ")}.`);
//     console.log("Helo my name is "+ name+".I am "+ age + " years old, and my hobbies are " + hobbies[0]+ ", " + hobbies[1]+ " and " + hobbies[2] + ".");
//   }

  
//   infoAboutMe();


  // EXERCICE2-PART1

// const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
// const myWatchedSeriesLength = myWatchedSeries.length;
// console.log(myWatchedSeriesLength);

// const myWatchedSeriesSentence = myWatchedSeries.join(", ");
// console.log( myWatchedSeriesSentence);

// console.log (" i watched 3 series : " + myWatchedSeriesSentence);
  
// // Part2
// console.log(myWatchedSeries.indexOf("the big bang theory"));

// myWatchedSeries.pop();
// myWatchedSeries.push('Friends');
// console.log(myWatchedSeries);

// myWatchedSeries.push('South Park');
// console.log(myWatchedSeries);

// myWatchedSeries.shift('black mirror');
// console.log(myWatchedSeries);

// const thirdLetter = myWatchedSeries[0][2];
// console.log(thirdLetter);
// console.log(myWatchedSeries);



// Exercice3

// Celsius temperature
// const celsiusTemperature = 30;


// const fahrenheitTemperature = (celsiusTemperature * 9 / 5) + 32;
// console.log(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F.")



// Exercice4

// let c;
// let a = 34;
// let b = 21;

// console.log(a+b) ;//first expression
// // Prediction: 55
// // Actual: 55

// a=2;
// console.log(a+b) //second expression
//     // Prediction: 23
//     // Actual: 23

// console.log(c);// undefined

// console.log(3 + 4 + '5'); // 75 because 3+4=7 , 5: 7-5:75


// Exercice5

// typeof(15)
// console.log(typeof(15));
// // Prediction: number
// // Actual: Number

// typeof(5.5)
// console.log(typeof(5.5));
// // Prediction: Number
// // Actual: Number


// typeof(NaN)
// console.log(typeof(NaN));
// // Prediction: String
// // Actual: Number

// typeof("hello")
// console.log(typeof("hello"));
// // Prediction: String
// // Actual: string

// typeof(true)
// console.log(typeof(true));
// // Prediction: Bollean
// // Actual: boolean

// typeof(1 != 2)
// console.log(typeof(1 != 2));
// // Prediction: Boolean
// // Actual: Boolean

// "hamburger" + "s"
// console.log(typeof("hamburger" + "s"));
// // Prediction: String
// // Actual: String

// "hamburger" + "s"
// console.log(typeof("hamburger" - "s"));
// // Prediction: String
// // Actual: number

// "1" + "3"
// console.log(typeof("1" + "3"));
// // Prediction: String
// // Actual:string

// "1" - "3"
// console.log(typeof("1" - "3"));
// // Prediction: string
// // Actual: number

// "johnny" + 5
// console.log(typeof("johnny" + 5));
// // Prediction: string
// // Actual: string

// "johnny" - 5
// console.log(typeof("johnny" - 5));
// // Prediction: number
// // Actual: number ( NaN)

// 99 * "hello"
// console.log(typeof(99 * "hello"));
// // Prediction: number NaN
// // Actual:number

// 1 != 1
// console.log(typeof(1 != 1));
// // Prediction:boolean
// // Actual: boolean

// 1 == "1"
// console.log(typeof(1 == "1"));
// // Prediction: boolean ( true)
// // Actual: boolean

// 1 === "1"
// console.log(typeof(1 === "1"));
// // Prediction: boolean (false)
// // Actual: boolean


// Exercice6

5 + "34"
// Prediction: 534
console.log(5 + "34");
// Actual: 534

5 - "4"
// Prediction: NaN
console.log(5 - "4");
// Actual: 1

10 % 5
// Prediction: 2
console.log(10 % 5);
// Actual: 0 ( the quotien is 0)

5 % 10
// Prediction: 0.5
console.log(5 % 10);
// Actual: 5

"Java" + "Script"
// Prediction: Java Script
console.log("Java" + "Script");
// Actual: JavaScript

" " + " "
// Prediction:
console.log(" " + " ");
// Actual:

" " + 0
// Prediction: 0
console.log(" " + 0);
// Actual: 0

true + true
// Prediction: true
console.log(true + true);
// Actual: 2

true + false
// Prediction: 1
console.log(true + false);
// Actual: 1 ( 1+0)

false + true
// Prediction: 1
console.log(false + true);
// Actual:

false - true
// Prediction: -1
console.log(false - true);
// Actual: -1

!true
// Prediction: -1
console.log(!true);
// Actual: false

3 - 4
// Prediction: -1
console.log(3 - 4);
// Actual: -1

"Bob" - "bill"
// Prediction: NaN
console.log("Bob" - "bill");
// Actual: NaN