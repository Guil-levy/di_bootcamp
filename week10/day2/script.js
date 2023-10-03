// Exercice1

// function compareToTen(num) {
//     return new Promise((resolve, reject) => {
//         if (num <= 10) {
//           resolve(`${num} is less than or equal to 10`);
//         } else {
//           reject(`${num} is greater than 10`);
//         }
//       });
//     }

// compareToTen(15)
//   .then(result => console.log('result ' + result))
//   .catch(error => console.log('rejected ' +error))


// compareToTen(8)
//   .then(result => console.log('result ' + result))
//   .catch(error => console.log('rejected ' +error))

//   Exercice2

// function delayed() {
//     return new Promise((res, rej) => {
//       setTimeout(() => {
//         res("success !!! You saved the princess");
//       }, 4000); 
//     });
//   }
  
// delayed()
//     .then(result => {
//       console.log(result); 
//     })
//     .catch(error => {
//       console.error(error);
//     });

// Exercice3

Promise.resolve(3)
.then(value => {
  console.log(value);
})
.catch(error => {
  console.error(error);
});

Promise.reject("Boo!")
.then(value => {
})
.catch(error => {
  console.error(error);
});
