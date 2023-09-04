const marioGame = {
    detail : "An amazing game!",
    characters : {
        mario : {
          description:"Small and jumpy. Likes princesses.",
          height: 10,
          weight: 3,
          speed: 12,
        },
        bowser : {
          description: "Big and green, Hates princesses.",
          height: 16,
          weight: 6,
          speed: 4,
        },
        princessPeach : {
          description: "Beautiful princess.",
          height: 12,
          weight: 2,
          speed: 2,
        }
    },
  }
1.
  const jsonString = JSON.stringify(marioGame);
// console.log(jsonString);
// The array get stringify, it means everything will be in string "description" : ""; so it s ready to be sent on the www.
// 2.
const jsonPrettyPrinted = JSON.stringify(marioGame, null, 2);
const jsonPrettyPrinted2 = JSON.stringify(jsonString, null, 2);

console.log(jsonPrettyPrinted);
console.log(jsonPrettyPrinted2);//this one is not working cose it s allready a JSON string?
// 3. ???
