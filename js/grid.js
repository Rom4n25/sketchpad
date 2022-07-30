function createSketch() {
  boxContainer.replaceChildren();
  let gridSize = rangeSlider.value;
  boxContainer.style.cssText =
    "grid-template-columns: repeat(" + gridSize + ",1fr)";

  for (let i = 0; i < gridSize * gridSize; i++) {
    boxContainer.appendChild(box.cloneNode(true));
  }

  boxesInContainer = document.querySelectorAll(".box");
  boxesInContainer.forEach((box) =>
    box.addEventListener("mousedown", mouseDownBox)
  );
  boxesInContainer.forEach((box) =>
    box.addEventListener("mouseup", mouseUpBox)
  );
}

function clearSketch() {
  boxesInContainer.forEach((box) => (box.style.backgroundColor = "white"));
}

function mouseDownBox() {
  setColor(this);
  boxesInContainer.forEach((box) =>
    box.addEventListener("mouseover", mouseOverBox)
  );
}

function mouseOverBox() {
  setColor(this);
}

function mouseUpBox() {
  boxesInContainer.forEach((box) =>
    box.removeEventListener("mouseover", mouseOverBox)
  );
}

function setColor(box) {
  switch (currentColor) {
    case "red":
      box.style.backgroundColor = "red";
      break;
    case "blue":
      box.style.backgroundColor = "blue";
      break;
    case "green":
      box.style.backgroundColor = "green";
      break;
    case "black":
      box.style.backgroundColor = "black";
      break;
    default:
      box.style.backgroundColor = "black";
  }
}

const boxContainer = document.querySelector(".boxContainer");
const box = document.createElement("div");
box.classList.add("box");
let boxesInContainer;

const rangeSlider = document.querySelector(".rangeBtn");
rangeSlider.addEventListener("input", createSketch);

const clearBtn = document.querySelector(".clearBtn");
clearBtn.addEventListener("click", clearSketch);

let currentColor;

const colorBtn = document.querySelectorAll(".colorBtn");
colorBtn.forEach((box) =>
  box.addEventListener("click", () => {
    currentColor = box.id;
  })
);

createSketch();
