/* array method
 * forEach
 * some
 * every
 * map
 * filter
 * reduce
 * find
 * findIndex
 */

// Destructuring array or Object

// let arr =[2,5,3,7,2,3,6,8,6];

// function minimumDistance(a){
//     let distance = [];
//     for (let i = 0; i < a.length; index++) {
//         if(a.indexOf(a[i]) !== a.lastIndexOf(a[i])){
//             let min = a.lastIndexOf(a[i])- a.indexOf(a[i])
//             distance.push(min)
//         }
//         return(distance.length === 0) ? -1 : distance.sort()[0]
//     }
// }
// let ret = minimumDistance(arr);
// console.log('min =>', ret)

// const arr = [1, 2, 3, 4];
// const multipliedArray = [];

// arr.forEach((number, index, arr) => {
//   multipliedArray.push(number * 2);
// });

// console.log(multipliedArray);

// // ---------------
// map -> returns an Array
// let newArr = oldArr.map((val, index, arr) => {
//     // return element to new Array
//   });

// MAP------------------------------

// let users = ['eli', 'adam','dan','john']

// let usersEmail = users.map(element => {
//     return element + '@gmail.com';
// })
// console.log(usersEmail);

// ------------------------
// const people = [
//     { firstName: 'John', lastName: 'Doe' },
//     { firstName: 'Jane', lastName: 'Smith' },
//     { firstName: 'Michael', lastName: 'Johnson' }
//   ];

//   let peopleName = people.map(element =>{
//     return element.lastName + ' ' + element.firstName;
//   });
//   console.log(peopleName);

// Filter-----------------------------
// arr = [0, 1, 1, 2, 3, 5, 8];

// function filter(arr) {
//   let newArr = [];
//   arr.forEach((element) => {
//     if (element > 3) {
//       newArr.push(element);
//     }
//   });
//   return newArr;
// }
// console.log(filter([0, 1, 1, 2, 3, 5, 8]));

// arr.forEach(element => {
//     if (element<3) {
//        let newArray = arr.push();
//         console.log(newArray);

//     }
// });
// ------------------------------

// const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

// const filtered = dragons.filter(element => element.toLocaleLowerCase().includes("sa"));
// console.log(filtered);


// --------------------------------------
// const numbers = [2, 5, 10, 100];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// console.log(sum); 


// REDUCE------------------------

// const numbers = [2, 5, 10, 100];

// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// console.log(sum);

// findIndex----------------------------
// const people = [
//     { firstName: 'John', lastName: 'Doe' },
//     { firstName: 'Jane', lastName: 'Smith' },
//     { firstName: 'Michael', lastName: 'Johnson' }
//   ];

// // find the index element with firstName == 'Jane'

// const index = people.findIndex(element => element.firstName === 'Jane');
// console.log(index); 

// ---------------------------------------

// Given n, take the sum of the digits of n.
// If that value has more than one digit,
// continue reducing in this way until a single-digit
// number is produced.
// This is only applicable to the natural numbers.
// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// ---------
// function calcDigit(num){
//     let arr = new String (num).split("");
//     let sum = 0;
//     for(x in arr){
//         sum += Number(arr[x])
//     }
//     if (sum<10)return sum;
//     console.log(sum);
//     return calcDigit(sum)
// }

// console.log(calcDigit(493193));
// -----
// function calcDigit2(num){
//     let arr = new String(num).split("");
//     let sum = arr.reduce((total,num)=>{
//       return total + Number(num)
//     },0)
  
//     return (sum < 10) ? sum : calcDigit2(sum)
//   }
  
//   console.log(calcDigit2(493193));

// Destructuring arr----------------
// let arr = ['abc' , 'bcd', 'fgh'];
// // const a = arr[0]
// // const b = arr[1] OR

// // const [a, b, c] = arr

// // console.log(a);

// const [a, ...rest] = arr
// console.log(a, rest);