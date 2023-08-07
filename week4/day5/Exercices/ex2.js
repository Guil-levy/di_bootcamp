let color = document.querySelector('div');
color.style.backgroundColor="lightblue";
color.style.padding="50px";

// 2/ 
let name = document.querySelector('li');
name.style.display="none";
// 3/
let pete = document.getElementsByTagName('li')[1];
pete.style.border="5px solid black";

// 4
let font = document.getElementsByTagName('body');
font.style.fontSize="25px"; //working??

// Bonus
// const users = document.querySelector("li");
// if (color??????){
//     alert(` Hello ${users[0].textContent} and ${users[1].textContent}`);
// }
