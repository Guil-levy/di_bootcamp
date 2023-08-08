function onDragStart4PinkSquare(e){
    console.log("start");
    e.dataTransfer.setData("text/plain", e.target.id);
}


function onDragEnd4PinkSquare(e){
    console.log("end");
}

function onDragOver4OrangeSquare(e){
    e.preventDefault();
    console.log("over");
}

function onDrop4OrangeSquare(e){
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain")
    console.log(id);

    const pinkSquare= document.getElementById(id);
    e.target.appendChild(pinkSquare);

    console.log("drop");
}