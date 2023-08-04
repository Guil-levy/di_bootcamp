// Exercice1

// function infoAboutMe() {
//     console.log("My name is Guil, i'm 37, i like dancing and video games");

// }
// infoAboutMe();

// PART2

// function infoAboutPerson (personName, personAge, personFavoriteColor) {
//     // { personName: Guil,
//     //   personAge: 37,
//     //   personFavoriteColor: Blue}
//         console.log(`Your name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}`);
        
// }

// infoAboutPerson();
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")

// EXERCICE2

// function calculateTip() {
//      billAmount = parseFloat(prompt("What is the amount of the bill?"));
// //    if (isNaN(billAmount)) {
// //     console.log("Choose a number.");
// //     return;
// //     };   

// let tipPercentage;
// if ( billAmount < 50)
//         {
//         tipPercentage = 0.2 ; 
//         }
//     else if ( billAmount >= 50 && billAmount <= 200)
//         {
//         tipPercentage =  0.15 ;
//         }
//     else ( billAmount > 200)
//         {
//         tipPercentage = 0.1 ;
//         }

// let tipAmount = billAmount * tipPercentage;
// let finalBill = billAmount + tipAmount;     

// console.log("Tip amount :"+ tipAmount);
// console.log("Final bill :" + finalBill);
// }
// calculateTip();

// Exercice3

// function isDivisible(divisor) {
//     let divisibleBy =0;
//     for (let i = 0; i < 501; i++) {
//       if( i % divisor ===0 ){
//         console.log(i);
//         divisibleBy = divisibleBy + i;
//       }
//     }
//     console.log(`The sum of all the numbers divisible by ${divisor} is ${divisibleBy} `);
// } 
// isDivisible(23);
// isDivisible(3);
// isDivisible(45);

// Exercice4
// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// let shoppingList = ['banana', 'orange', 'apple'];

// function myBill(){
//     let totalPrice = 0;
//     for (let i = 0; i < shoppingList.length; i++) {
//         const item = shoppingList[i];
//         if (item in stock && stock[item] > 0) {
//             totalPrice = totalPrice + prices[item];
//             stock[item] = stock[item] -1;
//           }
//     }
//     return totalPrice;
// }
// let totalPrice = myBill();
// console.log(totalPrice);
// console.log(stock);

// Exercice5: don't understand

// exercice6

// function hotelCost(){
//     const numberOfNights = prompt("How many nights would you like to stay? ")
//     if(isNaN(numberOfNights)){
//         return numberOfNights;
//     }
//     const pricePerNight = 140;
//     const totalCost = numberOfNights * pricePerNight;
        
    
//     return totalCost;
// }
// const totalHotelCost = hotelCost();
// console.log("the total price will be " + totalHotelCost + " $.");

// 2/

function planeRideCost(){
    let userInput;
}
while (true) {
    userInput = prompt("Please enter your destination:");
    if (userInput === null || typeof userInput === "string") {
      
      return 0;
    }
}
