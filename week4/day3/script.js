// let chances = 3;


// function playTheGame() {
//    let check = confirm('Do you want to play the game?');

//    if (!check){

//             alert('No problem, goodbye');
//         } 
//        else { 
//             let user = checkInput();
//             }
//         };

// function checkInput(){
    
//     let user = prompt('Enter a number between 0 to 10. You have ' + chances +' chances.');
//     if(!user) return;
//     if(isNaN(user)){
//         alert('Not a number, goodbye')
//         playTheGame()
//     }  
//     else if(user>10 || user<0){
//         alert('Not a good number, goodbye')
//         playTheGame()
//     }
//     else{
//         let computerNumber = randomNumber(10);
//         console.log('computerNumber=>', computerNumber);
//         compareNumbers(user, computerNumber);
//     }
//     return user;
// }

// function compareNumbers(userNumber, computerNumber){

//     for(i=0; i<chances; i++){
//         let j = chances - i-1;
       
//         if(userNumber==computerNumber){
//             alert('Winner!')
//             playTheGame()
//             return;
//         }
//         else if(i == chances -1){
//             alert('Too many tries! the right number was :' + computerNumber);
//             playTheGame()
//             return;
//         }
//         if(isNaN(userNumber)){
//             alert('Not a number, goodbye')
//             checkInput();
//             return;
          
//         }  
//         else if(userNumber>10 || userNumber<0){
//             alert('Not a good number, goodbye');
//             checkInput();
//             return;
            
//         }
//         else if (userNumber > computerNumber){
//             userNumber = prompt("Too big! guess again: . You have " + j + " chances left.")
//         }
        
//         else if (userNumber < computerNumber){
//             userNumber = prompt("Too small! guess again: . You have " + j + " chances left.")
//         }    
//     }   
// }


// function randomNumber(num){
//     return Math.floor(Math.random() * num) + 1;
// }

// -----------------------
let chances = 3;

function playTheGame() {
   let startGame = confirm('Do you want to play the game?');

    if (!startGame){
        alert('No problem, goodbye');
    } 
    else 
    {   
        getValidUserNumber();
    }
};

 //#################################
function getValidUserNumber(chancesLeft){
    
    let userInput;
    while (userInput !== null) {
        if (!isNaN(userInput) && userInput >= 1 && userInput <= 10) {
            // Valid input
            break; // Exit the loop
        } else {
            alert("This is not a valid input, try again");
            userInput = prompt("Please enter a number between 1 and 10 ");
        }
    }
    
    if (userInput === null) {
        alert("You clicked Cancel. Exiting...");
    }
    return userInput;
}

 //#################################
function TheGame(){
    computerNumber=randomNumber(10);
    console.log("computer number =>" + computerNumber);
    
    for(i=0; i<chances; i++){    
        
        chancesLeft=chances-i-1;

        userNumber=getValidUserNumber(chancesLeft);
        
        if(userNumber===computerNumber){
            alert('Winner!')
            getValidUserNumber(chancesLeft);
            return;
        }
        if  (userNumber>computerNumber){
             alert('Number too big   | Chances left:'+chancesLeft);
        }
        else if(isNaN(userInput) || userInput < 1 || userInput > 10){
            alert("This is not a valid Input, try again")
        }
        else {
             alert('Number too small | Chances left:'+chancesLeft);
        }           
    };   

    alert('Game over - no more chances');
    getValidUserNumber(chancesLeft);
    return;
}

 //#################################
function randomNumber(num){
    return Math.floor(Math.random() * num) + 1;
}