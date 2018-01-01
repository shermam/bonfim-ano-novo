import Ball from "./ball.js";
import Vec from "./vec.js";

export let touches = [];

const touchRadiusFactor = 100;

addEventListener('touchstart', e => {
    touches = [];
    for (const touch of e.touches) {
        touches.push(
            new Ball(
                new Vec(touch.pageX, touch.pageY),
                touch.radiusX * touchRadiusFactor,
                'red'
            )
        );
    }
});