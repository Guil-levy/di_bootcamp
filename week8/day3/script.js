// // Birthday Cake Candles
// // This array are Birthday Cake Candles
// // You can blow only the tallest candles
// // let arr = [2,4,4,1,6]
// // birthdayCakeCandles function will return
// // how many candles you can blow

// function birthdayCakeCandles(arr) {
//     const max = Math.max(...arr); // Find the maximum height in the array
//     const candlesWithMaxHeight = arr.filter(height => height === max); // Filter candles with the maximum height
//     const count = candlesWithMaxHeight.length; // Get the count of candles with the maximum height
//     return count; // Return the count
//   }
  
//   const candleHeights = [2, 4, 4, 1, 6];
//   const candlesToBlow = birthdayCakeCandles(candleHeights);
//   console.log(candlesToBlow); // Output: 1

  
//   -------------------------------


//  findIntersection function return an array that
//  contain the numbers exist in both strings from the array.
//  ["1,2,5,6,7", "2,5,7,8,15"] => [2,5,7]

// function findIntersection(str1, str2) {
//     const arr1 = str1.split(',').map(Number); // Convert string to array of numbers
//     const arr2 = str2.split(',').map(Number); // Convert string to array of numbers
    
//     const intersection = arr1.filter(num => arr2.includes(num)); // Find the intersection
    
//     return intersection;
//   }
  
//   const string1 = "1,2,5,6,7";
//   const string2 = "2,5,7,8,15";
//   const result = findIntersection(string1, string2);
//   console.log(result); // Output: [2, 5, 7]

//   ----------------------------

// let obj = {
//     name: 'John',
//     email: 'jjj@gmail.com',
//     age: 25
// }

// let entries = Object.entries(obj)

// // for(let [a,b] of entries){
// //     console.log(a,b);
// // }
// entries.forEach(([a, b]) => {
//     console.log(a, b);
// });

// -----------------------
let obj = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}

let keys = Object.keys(obj)
let values = Object.values(obj)

let sentence = keys.map((key, index) => `${key} ${values[index]}`).join(' ');


// ------------------
const users = {
    user1: { age: 44, name: 'picard', },
    user2: { age: 12, name: 'sisko', },
    user3: { age: 109, name: 'janeway',},
  }
  
  // filter for all users older than 30
  // and store their data in an array
  // use Array.filter Array.map
  
    // {id:'user1',age:44, name: 'picard'},
    // {id:'user3',age:109, name: 'janeway'}
  
//   -----
const filteredUsers = Object.entries(users)
  .filter(([id, user]) => user.age > 30)
  .map(([id, user]) => ({ id, age: user.age, name: user.name }));

console.log(filteredUsers);

// -----------------------
// Create a user class with username, and age. a Method to get user info. Then create an array to hold user instances.  a function to add the user to the array, a function to display all users' info.

class User {
    constructor(username, age) {
      this.username = username;
      this.age = age;
    }  
    getInfo() {
      return `Username: ${this.username}; Age: ${this.age};`;
    }
  }
  
  const userArray = [];
  
  function addUser(username, age) {
    const newUser = new User(username, age);
    userArray.push(newUser);
  }
  
  function displayUsersInfo() {
    for (const user of userArray) {
      console.log(user.getInfo());
    }
  }
  
  addUser("Alice", 25);
  addUser("Bob", 30);
  addUser("Charlie", 22);
  addUser("Zivouch", 40);
  
  displayUsersInfo();
  