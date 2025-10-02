const changeColor = document.querySelector("#changeColor");
const reset = document.querySelector("#reset");
let currentColor = document.querySelector("#currentColor");

let body = document.querySelector("body");

function generateColor(){
    let letters = "0123456789ABCDEF";
    let colors = "#";

    for(let i = 0; i<6; i++){
        colors += letters[Math.floor(Math.random() * 16)]
    }
    return colors
}

changeColor.addEventListener("click", ()=>{
    body.style.backgroundColor = generateColor();
    currentColor.textContent = "Current Color : " + generateColor();
})

reset.addEventListener("click", ()=>{
    body.style.backgroundColor = "white";
    currentColor.textContent = "Current Color : white "
})







