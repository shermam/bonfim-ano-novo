import { circle } from "./canvas.js";
import { touches } from "./touch.js";

export function handleTouches() {
    if (!touches) {
        return;
    }

    for (const touch of touches) {
        circle(
            touch.pageX,
            touch.pageY,
            touch.radiusX * 100,
            touch.radiusX * 100,
            touch.rotationAngle,
            'black'
        );

    }
}