import { circle } from "./canvas.js";

export function drawTarget(x, y) {

    circle(x, y, 100, 100, 0, 'black');
    circle(x, y, 80, 80, 0, 'yellow');
    circle(x, y, 60, 60, 0, 'black');
    circle(x, y, 40, 40, 0, 'yellow');
    circle(x, y, 20, 20, 0, 'black');
}