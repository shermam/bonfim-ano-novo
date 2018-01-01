import { update, rect, circle } from "./canvas.js";
import { handleTouches } from "./handleTouches.js";
import { handleMouse } from "./handleMouse.js";
import Ball from "./ball.js";
import { orientationEvent } from "./handleOrientation.js";
import { drawCenario } from "./cenario.js";
import { force } from "./mouseForce.js";
import { drawTarget } from "./target.js";
import { random } from "./math.js";
import Vec from "./vec.js";

const target = new Vec(random(0, innerWidth), random(0, innerHeight));
const ball = new Ball(new Vec(300, 300), 100);

update(deltaTime => {

    drawTarget(target);

    //ball.update(force());
    ball.update(orientationEvent);
    ball.draw();

    handleTouches();
    drawCenario();

    //handleMouse();

});

window.onerror = function (error) {
    alert(JSON.stringify(error));
}