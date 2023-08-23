const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];
// ------------------------------------------------
const usernames = [];

gameInfo.forEach((player) => { 
    const newName = player.username + "!";
    usernames.push(newName);
});

console.log(usernames);

// 2/

const winner = [];

gameInfo.forEach((player) => {
    if(player.score >5)
        {  winner.push(player.username)}

});

console.log(winner);

// 3/

let scoreSum = 0;

gameInfo.forEach((player) => {
    scoreSum += player.score;

});

console.log(scoreSum);
