// 1/

let sentence = "The movie is not that bad, I like it";
console.log(sentence);

// 2/

const indexOfNot = sentence.indexOf("not");
console.log(indexOfNot);

// 3/

const indexOfBad = sentence.indexOf("bad");
console.log(indexOfBad);

// 4/


if( indexOfNot != -1 && indexOfBad != -1 && indexOfNot < indexOfBad ){
    sentence = sentence.slice(0, indexOfNot) + 'good' + sentence.slice(indexOfBad + 3);
    // let sentence = "The movie is good, i like it."
    console.log(sentence);
}
// 5/
else{
 console.log(sentence);
}