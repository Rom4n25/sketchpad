function createSketch(){
    containerBox.replaceChildren();
    let gridSize = inputRange.value;
    containerBox.style.cssText = "grid-template-columns: repeat("+gridSize+",1fr)";

    for(let i = 0; i<(gridSize*gridSize); i++){
        containerBox.appendChild(box.cloneNode(true)); 
    }

    boxList = document.querySelectorAll(".box");
    boxList.forEach((box)=>box.addEventListener("mousedown",mouseDownBox));
    boxList.forEach((box)=>box.addEventListener("mouseup",mouseUpBox));
}

function clearSketch(){
    boxList.forEach(box=>box.classList.remove("click"));
}
 
function mouseOverBox(){
    this.classList.add("click");
}

function mouseUpBox(){
    boxList.forEach((box)=>box.removeEventListener("mouseover",mouseOverBox));
}

function mouseDownBox(){
    this.classList.add("click");
    boxList.forEach((box)=>box.addEventListener("mouseover",mouseOverBox));
}

const containerBox = document.querySelector(".container-box");
const box = document.createElement("div");
box.classList.add("box");
let boxList;

const inputRange = document.getElementById("input");
inputRange.addEventListener("input",createSketch);

const button = document.getElementById("clear");
button.addEventListener("click",clearSketch);

createSketch();
