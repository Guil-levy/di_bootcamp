const divElement = document.querySelector("div");
divElement.setAttribute('id', 'socialNetworkNavigation')

// 3
const newListItem = document.createElement('li');

const logoutText = document.createTextNode('Logout');

newListItem.append(logoutText);

const unorderedList = document.querySelector('ul');

unorderedList.appendChild(newListItem);

// 4

const firstElementChild = unorderedList.firstElementChild;
const lastElementChild = unorderedList.lastElementChild;

console.log('First child in the list: ' + firstElementChild.textContent);
console.log('Last child in the list: ' + lastElementChild.textContent);