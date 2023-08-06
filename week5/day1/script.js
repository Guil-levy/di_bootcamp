// Exercice1
// 1
// const elem = document.getElementById('content');

// // console.log(elem.firstElementChild);
// // console.log(elem.lastElementChild);
// // console.log(elem.firstElementChild.nextElementSibling);

// console.log(elem.parentNode);
// console.log(elem.childrenNode);


/*
Exercise 2: Targeting nodes
In exercise 1, you learned how to target nodes in several ways.
Continuing to use the markup in Listing 1, perform the following tasks:
1. Retrieve the value of a node using / innerText / innerHTML / textContent.
2. Change the value of a node using / innerText / innerHTML. / textContent.
3. Retrieve the value of a node attribute.
4. Change the value of a node attribute.
*/
// const elem = document.getElementById('content');
// console.log(elem.innerHTML);
// console.log(elem.innerText);
// console.log(elem.textContent);
// 2/
// elem.firstElementChild.textContent = "Changed title";
// elem.firstElementChild.innerText = "Changed again";
// elem.firstElementChild.innerHTML = "<h3> Changed 3rd time </h3>";
// 3
// console.log(elem.getAttribute('id'));
// elem.setAttribute('id', "aaa");


/*
Exercise 3: Manipulating the DOM
Now that you know how to traverse the DOM and alter node values,
the next logical step is to learn how to add, remove, and replace nodes.
Perform the following tasks:
1. Use the appendChild method to add a node.
2. Use the insertBefore method to add a node.
3. Use the removeChild method to remove a node.
4. Use the replaceChild method to replace a node.
*/
// let h2 = document.createElement("h2");
// h2.textContent = "New title HAHA";

// const content = document.getElementById("content");
// // content.appendChild(h2)
// content.insertBefore(h2, content.firstElementChild);
// console.log(h2);

// const header = document.getElementById('header');
// const title = document.getElementById('title');
// header.removeChild(title);
// console.log(title);

// const content = document.getElementById("content");
// const content_title = content.firstElementChild;
// const some_copy = content.firstElementChild.nextElementSibling;
// content.replaceChild(content_title, some_copy);
// console.log(some_copy);