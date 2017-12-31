import { update, rect, circle } from "./canvas.js";
import { mouseX, mouseY } from "./mouse.js";

update(deltaTime => {
    circle(mouseX, mouseY, 50);
})