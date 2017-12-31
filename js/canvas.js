//@ts-check

export let mouseX = 0;
export let mouseY = 0;

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

let previousTime = 0;
let _update = null;

export function update(updateFunction) {
    _update = updateFunction;
    draw();
}

/**
 * Draws a rectangle on the canvas
 * 
 * @param {Number} x X position of the rectangle (Pixels from the left of the canvas)
 * @param {Number} y Y position of the rectangle (Pixels from the right of the canvas)
 * @param {Number} w Width of the rectangle (in Pixels)
 * @param {Number} h Height position of the rectangle (in Pixels)
 * @param {String} color 
 */
export function rect(x, y, w, h, color = '000') {

    context.beginPath();
    context.fillStyle = color;
    context.rect(x, y, w, h);
    context.fill();
    context.closePath();
}

export function circle(x, y, radious, color = '000') {

    context.beginPath();
    context.fillStyle = color;
    context.ellipse(x, y, radious, radious, 45, 90, 90);
    context.fill();
    context.closePath();
}

function draw(time) {

    resizeCanvas(canvas);
    clearCanvas();

    time = time || 0;
    _update(time - previousTime);

    previousTime = time;

    requestAnimationFrame(draw);
}

function resizeCanvas(canvas) {
    if (canvas.width === innerWidth &&
        canvas.height === innerHeight) {
        return;
    }
    canvas.width = innerWidth;
    canvas.height = innerHeight;
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

canvas.addEventListener('mousemove', e => {
    mouseX = e.x;
    mouseY = e.y;
});