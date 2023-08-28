// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);
// //  ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

// ------2------
// const country = "USA";
// console.log([...country]);
// ['U', 'S', 'A']

// ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);
// [undefined, undefined]   ??

// Exercise 2 : Employees

// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// 1/

// const newArr = users.map(user =>{
//     return `Hello ${user.firstName}`;
// });
// console.log(newArr);

// 2/

// const newArr2 = users.filter(users =>{
//     return users.role === 'Full Stack Resident';;
// });
// console.log(newArr2);

// // 3/
// const newArr3 = newArr2.filter(user => {
//     return user.role === 'Full Stack Resident';
//   }).map(function(user) {
//     return user.lastName;
//   });
  
//   console.log("Full Stack Resident => " +newArr3);

// Exercise 3 : Star Wars

// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// const music =['Dadada' ,'dadada' ,'dadada' ,'POUMPOUM', 'PIMMM' ,'PIMMM' ,'pididididouUUUUUUum'];

// const starWars = epic.reduce((acc, val) =>{
//     return acc + ' ' + val
// });
// console.log(starWars);

// const starWarsMusic = music.reduce((acc,val) =>{
//     return acc+ ' ' + val;
// });
// console.log(starWarsMusic + starWarsMusic);

// Exercise 4 : Employees #2

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

// 1/
const newStudents = students.filter(student =>{
    return student.isPassed;
})
console.log(newStudents);

newStudents.forEach(student => {
    console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
  });