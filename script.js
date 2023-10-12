const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

let size = 20;
let isPressed = false
let color = 'black'
let x
let y

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;

    // gets position of mouse
    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;

    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        // Shows position of where mouse is at current time
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)  //The circle we are drawing is the pencil/pen line
        drawLine(x, y, x2, y2)  //This makes it so that it is a line and not a string of circles

        // THis keeps it from filling in if the line turns
        x= x2
        y = y2
    }
})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

// x1 & y1 = move to(start point) and x2 and y2 = draw
function drawLine(x1, y1, x2, y2){
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color         //color of the line
    ctx.lineWidth = size * 2 //*2 to match the width of the circle size
    ctx.stroke()                    //This call the function to draw the line
}

