// COnditions and Objects

// Conditionals
// If, else if, else, switch

// let x=5;
// let y=6;

// if(x>y){ 
//     console.log( "hello world");}
// else if(false){
//     console.log('equal to 6');
// }
// else{
//     console.log('oups i am the default');
// }

// console.log('bla bla');    

// Exercice1

// let age = prompt('What is your age?');
// console.log(age);

// if(age<18){
//     alert('Sorry, you are too young to drive this car. Powering off');

// }
// else if (age==18) {
//     alert('Congratulations on your first year of driving, Enjoy the ride!');
// }
//     else  {
//         alert('Powering on. Enjoy the ride!');
// } 
// End of exercice

// const Driver_AGE= 18;
// let age = prompt('Please enter your age');
// if(age<Driver_AGE){
//     alert('sorry');
// }
// else if(age == Driver_AGE){alert('Congratulation');}
// else{alert('Powering on');}




// Logical Operators ( && and, || or, ! not)
// let a=1;
// let b=2;
// let c=3;
// let d=3;

// if (a===1 && c===d){

// }

// Switch Statement
 
// switch ('about') {
//     case 'about':
//         alert('Welcome to about page')
        
//         break;
//     case 'home':
//             alert('Welcome to home page')
            
//         break;

//     default:
//         alert('404 page')
//         break;
// }


// // OBJET


// let user = {
//     name: 'John',
//     email:'john@gmail.com',
//     age: 18,
//     fav: ['Apple', 'Banana'],
//     address : {
//         city:'Tel Aviv',
//         country: 'Israel'
//     },
//     // calc: fonction(){}
// }

// // console.log(user.name);
// // console.log(user['email']);
// user.name = 'johny';
// user['email']= 'johny@gmail.com';
// console.log(user);

let user1 = {
    username:'Guil',
    password: 'aaa'
};
let database = [user1];
let newsfeed = [
    {username: 'user2',
    timeline:'date1',},
    {username: 'user3',
        timeline:"date2"},
    {username:'user4',
        timeline:'date3'}
];
console.log(user1);
console.log(database);
console.log(newsfeed);