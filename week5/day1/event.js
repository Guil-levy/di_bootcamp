function handleClick () {
    // console.log('buttom was clicked');
    const div = document.getElementById('innerDiv');
    const button = document.createElement('button');
    button.textContent= "Click me!!!";
    
    div.appendChild(button);
    
    button.addEventListener('click', function (event) {
        console.log(event.target);
    })
    const input = document.createElement('input');
    input.setAttribute('name', 'innerinput');

    input.addEventListener('input', function (event) {
        console.log(event.target.value);
        handleInput(event);    
})

}
function handleInput(e){
    console.log(e.target.value, e.target.name);
}

function handleOver(e){
    // const div = document.querySelector('div');
    // console.log("div =>", div);
    e.target.style.backgroundColor = "yellow";
    // console.log(e.target);
}

function handleLeave(e){
    e.target.style.backgroundColor = "red";
}