// function printFullName({ first, last }) {
//     return `Your full name is ${first} ${last}`;
// }

// const fullName = printFullName({ first: 'Elie', last: 'Schoppik' });
// console.log(fullName);

// // Exercice2

// function separateObject(obj) {
//     const keys = Object.keys(obj);
//     const values = Object.values(obj);
//     return [keys, values];
// }
// const obj = { a: 1, b: 2, c: 3 };
// const [keysArray, valuesArray] = separateObject(obj);

// console.log(keysArray);   
// console.log(valuesArray); 

// // 2/
// function keysAndValues(obj) {
//     const entries = Object.entries(obj);
//     const [keys, values] = [entries.map(entry => entry[0]), entries.map(entry => entry[1])];
//     return [keys, values];
// }

// Exercice3/

class Counter {
    constructor() {
      this.count = 0;
    }
  
    increment() {
      this.count++;
    }
  }
  
  const counterOne = new Counter();
  counterOne.increment();
  counterOne.increment();
  
  const counterTwo = counterOne;
  counterTwo.increment();
  
  console.log(counterOne.count);// counterOne= 0+1+1. counterTwo= counterOne. counterTwo+1 : counterOne=3
  





