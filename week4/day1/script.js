// 1/ prompt the user for his age
// 2/ create a function that get the age as parameter and 
// return true if age >= 18
// return false age <18
// 3/ use this function after getting the user prompt
// and log access granted if true, else access denied

// let question = prompt ("What is your age? ");

// function age(age) {
    
// if(age>=18){
//     return true
// } else {return false}
// }

// console.log(question.true, "Acces granted");
// console.log(question.false, "Acces denied");


function checkAge(age){
   if(age>=18){
    return true;
} else {return false;}
}
let userAge = prompt (" How old are you? ")

let isAge = checkAge(userAge);
if(isAge){
    console.log("Acces granted");
} else { console.log(" Access denied");}


















// const mumAge = (myAge) => {
//     return myAge *2;
//     };
// const dadAge = (myAge) => {
//     let mum = mumAge(myAge);
//     return mumAge *1.2;
//     };

// const mumDad = (myAge) => {
//     let mum = mumAge(myAge);
//     let dad = dadAge(myAge);
//     console.log(mum, dad);
// };
// mumDad(37);




//  myAge(37);
//  console.log(mumAge,dadAge);

// //     let mumAge = age * 2;
// //     let dadAge = mumAge *1.2;
// //     console.log(mumAge,dadAge);
// // };
// // age(37);


