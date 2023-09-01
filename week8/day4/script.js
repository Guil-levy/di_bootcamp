// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// // I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// exercice 2

// function displayStudentInfo(objUser) {
//     // Destructuring the object
//     const { first, last } = objUser;
    
  
//     const fullName = `${first} ${last}`;
//     return `Your full name is ${fullName}`;
// }
// console.log(displayStudentInfo({ first: 'Elie', last: 'Schoppik' })); 

// Exercice 3

// const users = { user1: 18273, user2: 92833, user3: 90315 };

// const userArray = Object.entries(users);

// console.log(userArray);

// // 2/
// const modifiedUserArray = [];
// userArray.forEach(([key,value]) =>{
//     modifiedUserArray.push([key, value * 2])
// })
// console.log(modifiedUserArray);

// Exercice 4

// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   const member = new Person('John');
//   console.log(typeof member);
// //   We add member to a class, so it's now an object type

// Exercice 5

// class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//   };
//   class Labrador extends Dog {
//     constructor(name, size) {
//       super(name);
//       this.size = size;
//     }
//   };
//   // Is correct. We have a super(), required in an extends class.
//   // the constructor calls name of the parent constructor(name)

//   Exercice 6

// [2] === [2] 
// //array are defined by reference, so it s False cose thoses 2 arrays have 2 diff references.
// `{} === {}`
// // same answer for objects. False

// 2/
// const object1 = { number: 5 }; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = { number: 5};

// object1.number = 4;
// console.log('obj2 ,', object2.number) //4
// console.log('obj3 ,', object3.number) //4
// console.log('obj4 ,', object4.number) //5

// // object1, object2, object3 have the same Reference, and they are assign to 4. object5 is simply 5

// Exercice 7?/

// 1/
class Animal {
    constructor(name, type, color) {
      this.name = name;
      this.type = type;
      this.color = color;
    }
  }

//   2/
class Mammal extends Animal {
    sound(sound) {
      return `${this.name} is a ${this.color} ${this.type} that makes the sound "${sound}".`;
    }
  }
  const myCat = new Mammal("Mordekai", "cat", "brown");
  const catSound = myCat.sound("Miaaaw");
  console.log(catSound);   

//   3/

class Mammal1 extends Animal {
    sound(sound) {
      return `Moooo I'm a ${this.type}, named ${this.name} and I'm ${this.color}.`;
    }
  }

  const farmerCow = new Mammal1("Lily", "cow", "brown and white");
const cowSound = farmerCow.sound("moos");
console.log(cowSound);






