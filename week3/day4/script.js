// EXERCICE1

// let x = 5;
// let y = 2;

// if (x>y) {
//     console.log("x is the biggest number");
// }

// EXERCICE2

// let newDog = "Chihuahua";
// console.log(newDog.length);

// console.log(newDog.toUpperCase());
// console.log(newDog.toLowerCase());

// if (newDog === "Chihuahua") {
//     console.log("I Love Cihuahuas, it's my favorite dog breed.");
// } else{console.log("I don't care, i prefere cats.");}


//Exercice3

//  const oddEven = prompt("Please enter a number");

// console.log(oddEven);

// if( oddEven % 2 === 0){ console.log( oddEven + " is an even number.");}
// else { console.log(oddEven + " is an odd number.");}


// Exercice4

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

if( users.length ===0){
    console.log("no one is online");
} else if (users.length ===1) {
    console.log(users[0] +" is online”.");
} else if(users.length ===2){
    console.log(users[0] + "and" + users[1] +" are online.");

}else {
    const additionalUsersCount = users.length - 2;
  console.log(users[0] + ", " + users[1] + ", and " + additionalUsersCount + " more are online.");
}