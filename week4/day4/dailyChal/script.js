
// // -------------------

// let numberOfBeers = Number(prompt("How many beers? from 10 to 100."));
// let numberOfBeersToTakeAway = 1;
// while (numberOfBeers > 0) {
    
// const stanza = makeStanza (numberOfBeers, numberOfBeersToTakeAway);
// console.log(stanza);
// numberOfBeers -= numberOfBeersToTakeAway;
// numberOfBeersToTakeAway++;
// }
// function makeStanza(num, counter){
    
//     const bottleOrBottles = getBottleOrBottles(num);
//     const stanza = `${num} ${bottleOrBottles} of beer on the wall
//     ${num} ${bottleOrBottles} of beer
//     Take ${counter} down, pass it around
//     ${num - counter} ${getBottleOrBottles(num - counter)} of beer on the wall`;
    
//     return stanza;
// }

// function isPlural(num){
//     return num>1;
// }

// function getBottleOrBottles(num){
//     if(isPlural(num)){
//         return "bottles";
//     }
//     else{
//         return "bottle";
//     }
// }

// ----------------------------


let numberOfBeers = getUserInput();
let numberOfBeersToTakeAway = 1;

function getUserInput(){
    const answer = prompt("How many beers?");
    if (answer == "") return alert(" Please enter something");
    const number = Number(answer);
    if (Number.isNaN(number)) return alert(" Please enter a number");
    return number;
}

while (numberOfBeers > 0) {    
const stanza = makeStanza (numberOfBeers, numberOfBeersToTakeAway);
console.log(stanza);
numberOfBeers -= numberOfBeersToTakeAway;
numberOfBeersToTakeAway++;
}
function makeStanza(num, counter){
    
    const bottleOrBottles = getBottleOrBottles(num);
    const bottlesToTakeAway = getSmallerNumber( counter, num);
    const remainingBottles = getBiggerNumber(num - counter, 0);

    const stanza = `${num} ${bottleOrBottles} of beer on the wall
    ${num} ${bottleOrBottles} of beer
    Take ${bottlesToTakeAway} down, pass it around
    ${remainingBottles} ${getBottleOrBottles(remainingBottles)} of beer on the wall`;
    
    return stanza;
}
function getBiggerNumber(a,b){
    if (a>b){ return a;}
    else  return b;
}

function getSmallerNumber(a,b){
    if (a<b){ return a;}
    else  return b;
}

function isPlural(num){
    return num>1;
}

function getBottleOrBottles(num){
    if(isPlural(num)){
        return "bottles";
    }
    else{
        return "bottle";
    }
}
