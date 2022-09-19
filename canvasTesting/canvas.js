const unitSize = 50;
const gridSize = 4000;
const bixelNum = gridSize/unitSize;

const canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
const outline = document.getElementById("outline");


for (let i = 0; i < bixelNum; i++) {
    for (let j = 0; j <bixelNum; j++) {

        let fillColor;

        if ((i+j) % 2 == 0)
            fillColor = "red";
        else
            fillColor = "blue";

        ctx.fillStyle = fillColor;
        ctx.fillRect(i*unitSize, j*unitSize, unitSize, unitSize);

}

}


canvas.addEventListener("click", focus);

function focus(event) {

        // Get the target
        const target = event.target;

        // Get the bounding rectangle of target
        const rect = target.getBoundingClientRect();
    
        // Mouse position
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const bixelX = Math.floor(x / unitSize);
        const bixelY = Math.floor(y / unitSize);
        console.log(bixelX,bixelY)

        outline.style.top = `${unitSize*bixelY}px`;
        outline.style.left = `${unitSize*bixelX}px`;

}