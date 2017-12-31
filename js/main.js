import { update, rect, circle, mouseX, mouseY } from "./canvas.js";

update(deltaTime => {
    circle(mouseX, mouseY, 50);
})