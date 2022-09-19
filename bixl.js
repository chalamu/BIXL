const bixels = [];

const unit = 50;

const container = document.getElementById("container");

let color = "red";
let colorElement = null;

for (let i = 0; i < 20; i++) {
  for (let j = 0; j < 20; j++) {
    let bixel = document.createElement("div");

    bixel.classList.add("pixel-style");

    // if ((i+j) % 2 == 0)
    //     bixel.style.backgroundColor = "red";
    // else
    //     bixel.style.backgroundColor = "blue";

    bixel.style.top = `${unit * i  + 8}px`;
    bixel.style.left = `${unit * j + 8}px`;

    container.append(bixel);

    bixel.addEventListener("click", changeColor);

    bixels[i] = bixel;

    bixel.Lindex = i;
  }
}

initColorPicker();

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 150, 75);

function changeColor() {
  this.style.backgroundColor = color;
}

function initColorPicker() {
  const colorSelector = document.querySelectorAll(".picker");
  colorSelector.forEach((element) => {
    element.addEventListener("click", () => {
      color = element.style.backgroundColor;
      element.style.border = "lightblue 3px solid";
      colorElement.style.border = "";
      colorElement = element;
    });
  });
}
