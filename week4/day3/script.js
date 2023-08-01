// let userInput;
// const playTheGame=(onClick)=>{
//     const play = confirm('DO you want to start the game? Yes/No') 
//         if (play == false) {
//            return console.log("No problem, Goodbye");
//         } else { 
//             userInput = prompt("Enter a number between 0 and 10 :");
//             if (userInput === null) {
//                 alert("Sorry Not a number, Goodbye ");
//             } else if (userInput < 0 || userInput > 10) {
//                 alert("Sorry it s not a good number, Goodbye ");
//             } else {
//                 let computerNumber = Math.floor(Math.random()*10)+1;
//             }
//          return userInput;
//     }   
// };

// function compareNumbers(userInput, computerNumber) {
//     for (let i = 0; i < 3; i++) {
//         if (userInput > computerNumber) {
//                 prompt("It's less.");
//         }
//         else if (userInput < computerNumber) {
//                 prompt("It's more.");
//         } else {
//                 prompt("You win!");
//         }
//     }
// };

let chances = 3;

function playTheGame() {
   let check = confirm('Do you want to play the game?');
   if (check){
    // console.log('play the game');
    let user = prompt('Enter a number between 0 to 10');
        if(!user) return;
        if(isNaN(user)){
            alert('Not a number, goodbye')
        }  
        else if(user>10 || user<0){
            alert('Not a good number, goodbye')
        }
        else{
            let computerNumber = randomNumber(10);
            console.log('computerNumber=>', computerNumber);
            compareNumbers(user, computerNumber);
        }
   } 
   else{
    alert('No problem, goodbye');
    }
}
function compareNumbers(userNumber, computerNumber){
  
    for(i=0; i<chances; i++){
        if(userNumber==computerNumber){
            alert('Winner!')
            playTheGame()
            return;
        }
        else if(i == chances -1){
            alert('Too many tries! the right number was :' + computerNumber);
        }
        else if (userNumber > computerNumber){
            userNumber = prompt("Too big! guess again:")
        }
        if(!userNumber) return;
        else if (userNumber < computerNumber){
            userNumber = prompt("Too small! guess again:")
        }    
    }   
}


function randomNumber(num){
    return Math.floor(Math.random() * num) + 1;
}