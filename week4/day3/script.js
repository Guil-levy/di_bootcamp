let chances = 3;


function playTheGame() {
   let check = confirm('Do you want to play the game?');

   if (!check){

            alert('No problem, goodbye');
        } 
       else { 
            let user = checkInput();
            }
        };

function checkInput(){
    
    let user = prompt('Enter a number between 0 to 10. You have ' + chances +' chances.');
    if(!user) return;
    if(isNaN(user)){
        alert('Not a number, goodbye')
        playTheGame()
    }  
    else if(user>10 || user<0){
        alert('Not a good number, goodbye')
        playTheGame()
    }
    else{
        let computerNumber = randomNumber(10);
        console.log('computerNumber=>', computerNumber);
        compareNumbers(user, computerNumber);
    }
    return user;
}

function compareNumbers(userNumber, computerNumber){

    for(i=0; i<chances; i++){
        let j = chances - i-1;
       
        if(userNumber==computerNumber){
            alert('Winner!')
            playTheGame()
            return;
        }
        else if(i == chances -1){
            alert('Too many tries! the right number was :' + computerNumber);
            playTheGame()
            return;
        }
        if(isNaN(userNumber)){
            alert('Not a number, goodbye')
            checkInput();
            return;
          
        }  
        else if(userNumber>10 || userNumber<0){
            alert('Not a good number, goodbye');
            checkInput();
            return;
            
        }
        else if (userNumber > computerNumber){
            userNumber = prompt("Too big! guess again: . You have " + j + " chances left.")
        }
        
        else if (userNumber < computerNumber){
            userNumber = prompt("Too small! guess again: . You have " + j + " chances left.")
        }    
    }   
}


function randomNumber(num){
    return Math.floor(Math.random() * num) + 1;
}

// ----------------
// let chances = 3;

// function playTheGame() {
//     let check = confirm('Do you want to play the game?');

//     if (!check) {
//         alert('No problem, goodbye');
//     } else {
//         checkInput();
//     }
// }

// function checkInput() {
//     let user;
//     let isValidNumber = false;

//     while (!isValidNumber) {
//         user = prompt('Enter a number between 0 to 10. You have ' + chances + ' chances.');

//         if (user === null) {
//             // User canceled the prompt, exit the function
//             return;
//         }

//         isValidNumber = !isNaN(user) && user >= 0 && user <= 10;

//         if (!isValidNumber) {
//             alert('Invalid input. Please enter a valid number between 0 and 10.');
//         }
//     }

//     let computerNumber = randomNumber(10);
//     console.log('computerNumber =>', computerNumber);
//     compareNumbers(user, computerNumber);
// }

// function compareNumbers(userNumber, computerNumber) {
//     for (let i = 0; i < chances; i++) {
//         let j = chances - i - 1;

//         if (userNumber == computerNumber) {
//             alert('Winner!');
//             playTheGame();
//             return;
//         } else if (i == chances - 1) {
//             alert('Too many tries! The right number was :' + computerNumber);
//             playTheGame();
//             return;
//         } else if (userNumber > computerNumber) {
//             userNumber = prompt("Too big! Guess again: You have " + j + " chances left.");
//         } else if (userNumber < computerNumber) {
//             userNumber = prompt("Too small! Guess again: You have " + j + " chances left.");
//         }
//     }
// }

// function randomNumber(num) {
//     return Math.floor(Math.random() * num) + 1;
// }
// // Can't do the bonus question