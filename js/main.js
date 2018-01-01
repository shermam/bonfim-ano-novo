import { update, rect, circle } from "./canvas.js";
import { handleTouches } from "./handleTouches.js";
import { handleMouse } from "./handleMouse.js";
import { ball } from "./ball.js";
import { orientationEvent } from "./handleOrientation.js";
import { drawCenario } from "./cenario.js";
import { force } from "./mouseForce.js";
import { drawTarget } from "./target.js";
import { random } from "./math.js";

const targetX = random(0, innerWidth);
const targetY = random(0, innerHeight);


update(deltaTime => {

    drawTarget(targetX, targetY);

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