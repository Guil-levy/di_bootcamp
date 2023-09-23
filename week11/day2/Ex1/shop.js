const products = require("./products");

//Search function
function ProductByName(prodName) {
    return products.find((product) => product.name === prodName)
}


const product2 = ProductByName('Product 2');
console.log(product2);