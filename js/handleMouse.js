import { mouseX, mouseY } from "./mouse.js";
import { circle } from "./canvas.js";

export function handleMouse() {
    circle(mouseX, mouseY, 50, 50, 0);
}