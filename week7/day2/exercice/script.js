// #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }
// funcOne();

// answer 3. 'a' is reasign to 3 if a>3
// #1.2 What will happen if the variable is declared
// with const instead of let ?
// -> you get an error because you can't change a const value

//#2
// const a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// funcThree()
// funcTwo()
// funcThree()

// answer 0,5 inside funcThree.
// if you put const, it will run only one time before error, answer 0.

//#3
// function funcFour() {
//     window.a = "hello";
// }

// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }
// funcFour()
// funcFive()

// function 5 alert is 'hello'

//#4
// const a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }
// funcSix()

// answer is Test. because a is reasign to test in the function.
// answer is still Test. they are not in the same scoop so no errors

//#5
// const a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// answer 5, answer 2. same with const

// Exercise 2

// const winBattle = () => {
//     return true;
// }
// // const experiencePoints= 0;

// // 3
// const experiencePoints = winBattle() ? 10 : 1;

// console.log(experiencePoints);

// Exercise 3 : Is It A String ?

// const isString = value => typeof(value) === 'string';
//     console.log(isString('hello'));
// //true
//     console.log(isString([1, 2, 4, 0]));
// //false

// 🌟 Exercise 4 : Colors

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// // colors.forEach((color, i) => {
// //     console.log(`${i + 1}# choice is ${color}.`);
// // });

// // 2

// if (colors.includes("Violet")) {
//     console.log("Yeah");
// } else {
//     console.log("No...");
// }

// Exercice 5

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th", "st", "nd", "rd"];

// colors.forEach((color, index) => {
//   const suffixIndex = index + 1 <= 3 ? index + 1 : 0;
//   const ordinalSuffix = ordinal[suffixIndex];

//   console.log(`${index + 1}${ordinalSuffix} choice is ${color}.`);
// });

// Exercice 6

let bankAmount = 1000;

const vatPercentage = 17;

const details = ["+200", "-100", "+146", "+167", "-2900"];

// 4,5 i don't know