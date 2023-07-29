// for( let i=0; i<10; i++){
//     console.log("the current number " + i);
// }


// let arr = [1, 4, 7, 10]
// for (let i=0; i<arr.length; i++) {
//     console.log(arr[i]);
// }

// Exercice1

// for (let i = 0; i < 16; i++) {
    
//     if (i % 2 === 0) {  
//         console.log(i + " is even");
//     }
//     else{
//         console.log(i + " is odd");
//     }
// }

//Looping in OBJECT
// const person = {fname:"John", lname:"Doe", age:25};
// for (let x in person) {
//   console.log(x) //fname lname age
//   console.log(person[x]) // John Doe 25
// }

// const colors = ["Blue", "Pink", "Green", "Purple"];
// for (let i of colors) {
//     console.log(i);
    
// }

// //While Loop

// let n = 0;
// while (n < 3) {
//     n++;
//     console.log(n);
// }

//DO WHILE LOOP

// let username;

// do {
//     username = prompt("What is your username ?")
   
// } 
//     while (username !== "guil");

// THE BREAK KEYWORK

// for (let i = 0; i < 10; i++) {
//     if( i===3){continue;}
//     else if ( i ===4){continue;}
//     console.log(" the number is "+ i);
// }

// EXERCICE2

// let names= ["john", "sarah", 23, "Rudolf",34];
// for (let i = 0; i < names.length; i++) {
//     if(typeof names[i] !== "string"){continue;}

//     // if (typeof === String) {
//     //     if(item.charAt(0) !== item.charAt(0).toUpperCase()){
//     //         names[i] = item.charAt(0).toUpperCase()+item.slice(1);
//     //         }
//     //         console.log(names[i]);
//     //     }
//      if( names[i][0] !==names[i][0].toUpperCase()){
//         names[i] = names[i][0].toUpperCase()+ names[i].slice(1);
//      }   
//      console.log(names[i]);
//     }
   
// for(let i of names){
//   if(typeof i !== "string"){
//     break;
//   }
//   console.log(i);
// }
