//EXERCICE 1//

const fruits = [ "Apples", "Oranges", "Banana", "Blueberries"];

// fruits.shift()

let index= fruits.indexOf('Banana');
console.log(index);

fruits.splice(index, 1)

// 2/

fruits.sort();

// fruits.push('Kiwi');

fruits[fruits.length] ='Kiwi'

// 4/
 index = fruits.indexOf('Apples');
 fruits.splice(index,1)

//  5/

fruits.reverse();

console.log(fruits);

