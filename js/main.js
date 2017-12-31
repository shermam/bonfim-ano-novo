import { update, rect, circle } from "./canvas.js";
import { handleTouches } from "./handleTouches.js";
import { handleMouse } from "./handleMouse.js";
import { ball } from "./ball.js";
import { orientationEvent } from "./handleOrientation.js";



update(deltaTime => {


    ball.update(orientationEvent);
    ball.draw();


    //handleMouse();
    handleTouches();

});




