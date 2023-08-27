
// let client = "John";

// const groceries = {
//     fruits : ["pear", "apple", "banana"],
//     vegetables: ["tomatoes", "cucumber", "salad"],
//     totalPrice : "20$",
//     other : {
//         paid : true,
//         meansOfPayment : ["cash", "creditCard"]
//     }
// }

// // 1

// const displayGroceries = () => {
//     groceries.fruits.forEach(fruit =>{
//         console.log(fruit);
//     });
// };
// displayGroceries();

// 2
let client = "John";

const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        paid: true,
        meansOfPayment: ["cash", "creditCard"]
    }
};
{
    let client2 = "Arthur"
const cloneGroceries = () => {
    let user = client2;

    client2 = "Betty";

    let shopping = { ...groceries }; 

    shopping.totalPrice = "35$";

    shopping.other.paid = false;

    console.log("User:", user);
    console.log("Client2:", client2);
    console.log("Shopping:", shopping);
  };

  cloneGroceries();
}
