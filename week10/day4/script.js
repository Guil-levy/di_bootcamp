// Exercice1 STARWARS!!!
// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));

// async function fetchData() {
//     try {
//       const response = await fetch("https://www.swapi.tech/api/starships/9/");
//       const objectStarWars = await response.json();
//       console.log(objectStarWars.result);
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   fetchData();
  
//   🌟 Exercise 2: Analyze

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}
asyncCall();
// Since thoses functions are asynchronius, they are non blocking, so it will execute asyncCall(), and will wait 2 sec for the other function