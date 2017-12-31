import { circle, rect } from "./canvas.js";
import { touches } from "./touch.js";

export const touchRadiusFactor = 100;

export function handleTouches() {
    if (!touches) {
        return;
    }

    for (const touch of touches) {
        rect(
            touch.pageX,
            touch.pageY,
            touch.radiusX * touchRadiusFactor,
            touch.radiusX * touchRadiusFactor,
            'black'
        );

    }
}