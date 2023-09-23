//something wrong with my ES6
import people from './data';

function calculateAverageAge(people) {
    
  
    const totalAge = people.reduce((sum, person) => sum + person.age, 0);
    const averageAge = totalAge / people.length;
  
    console.log(`Average Age: ${averageAge}`);
  }
  
  calculateAverageAge(people);