import { circle } from "./canvas.js";

export function drawTarget(target) {

    circle(target.x, target.y, 100, 100, 0, 'black');
    circle(target.x, target.y, 80, 80, 0, 'yellow');
    circle(target.x, target.y, 60, 60, 0, 'black');
    circle(target.x, target.y, 40, 40, 0, 'yellow');
    circle(target.x, target.y, 20, 20, 0, 'black');
}