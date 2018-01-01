import { circle, rect } from "./canvas.js";
import { touches } from "./touch.js";

export function handleTouches() {

    if (!touches) {
        return;
    }

    for (const touch of touches) {
        touch.draw();
    }
}