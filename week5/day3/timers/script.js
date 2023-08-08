// SetTimeout method

// const settimeout_id = setTimeout(function () {
//   changeBodyColor();
// }, 1000 * 3);

// function changeBodyColor() {
//   document.body.style.backgroundColor = "green";
// }

// function stopTimeout(){
//     clearTimeout(clearInterval_id)
// }

// set interval

// let count = 0;

// const clearInterval_id = setInterval(function(){
//     console.log(count++);
// }, 1000*2)

// function stopInterval(){
//         clearInterval(settimeout_id)
//     }

    
// function stopTimeout(){
//     clearInterval(clearInterval_id)
// }

// set css animation
let id;
let pos= 0;
function start(){
    const box = document.getElementById('box');
    
     id = setInterval(function(){
        pos++;
        box.style.left = pos + "px";
        box.style.top = pos + "px";
        if (pos===350){
            stop()
        }
    },10)
}

function stop(){
    clearInterval(id);
}