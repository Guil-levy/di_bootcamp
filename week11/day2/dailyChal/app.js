const greetFunction  = require('./greeting')

const userName = 'John John';
const greetingMessage = greetFunction(userName);
console.log(greetingMessage);