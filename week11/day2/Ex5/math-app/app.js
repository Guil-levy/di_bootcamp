const _ = require('lodash');

const math = require('./math.js');

// lodash function to sort. Same as .sort((a,b) =>a-b)
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedNumbers = _.sortBy(numbers);
console.log('Sorted Numbers:', sortedNumbers);

// math functions
const sum = math.add(5, 3);
console.log('Sum:', sum);

const product = math.multiply(4, 6);
console.log('Product:', product);