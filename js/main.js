import { update, rect, circle } from "./canvas.js";
import { mouseX, mouseY } from "./mouse.js";
import { touches } from "./touch.js";

update(deltaTime => {
    handleMouse();
    handleTouches();
})

function handleMouse() {
    circle(mouseX, mouseY, 50);
}

function handleTouches() {
    if (!touches) {
        return;
    }

    for (const touch of touches) {
        circle(touch.pageX, touch.pageY, 50);
    }
}