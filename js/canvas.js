//@ts-check

/**
 * Canvas reference
 * 
 * @type { HTMLCanvasElement }
 */
export const canvas = document.querySelector('canvas');

/**
 * Context reference
 * 
 * @type { CanvasRenderingContext2D }
 */
export const context = canvas.getContext('2d');

/**
 * Time of the previous execution of the draw function
 * 
 * @type { number }
 */
let previousTime = 0;

/**
 * Reference to the update function to be called in draw
 * 
 * @type { function }
 */
let _update = null;

/**
 * Stores the reference to the outside update function
 * 
 * @param {function} updateFunction 
 */
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

/**
 * 
 * @param {number} x 
 * @param {number} y 
 * @param {number} radiousX
 * @param {number} radiousY
 * @param {number} rotation
 * @param {string} color 
 */
export function circle(x, y, radiousX, radiousY, rotation, color = '000') {

    context.beginPath();
    context.fillStyle = color;
    context.ellipse(x, y, radiousX, radiousY, rotation, 0, 360);
    context.fill();
    context.closePath();
}

/**
 * Draws the on the canvas in a loop
 * 
 * @param {number} time 
 */
function draw(time = 0) {

    resizeCanvas(canvas);
    clearCanvas();

    _update(time - previousTime);

    previousTime = time;

    requestAnimationFrame(draw);
}

/**
 * Sets the size of the canvas to the size of the screen
 * 
 * @param {HTMLCanvasElement} canvas
 */
function resizeCanvas(canvas) {
    if (canvas.width === innerWidth &&
        canvas.height === innerHeight) {
        return;
    }
    canvas.width = innerWidth;
    canvas.height = innerHeight;
}

/**
 * Clears the canvas
 */
function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}