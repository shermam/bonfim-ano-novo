import { update, rect, circle } from "./canvas.js";
import { handleTouches } from "./handleTouches.js";
import { handleMouse } from "./handleMouse.js";
import { limit } from "./math.js";

let ball = {
    x: 300,
    y: 300,
    vel: {
        x: 0,
        y: 0
    },
    acc: {
        x: 0,
        y: 0
    }
};

update(deltaTime => {

    drawBall(ball);

    ball.vel.x += ball.acc.x;
    ball.vel.y += ball.acc.y;

    ball.x = limit(ball.x + ball.vel.x, 0, innerWidth);
    ball.y = limit(ball.y + ball.vel.y, 0, innerHeight);

    if (ball.x === 0 || ball.x === innerWidth) {
        resetX(ball);
    }

    if (ball.y === 0 || ball.y === innerHeight) {
        resetY(ball);
    }


    //handleMouse();
    handleTouches();

});

function resetX(ball) {
    ball.vel.x = 0;
    ball.acc.x = 0;
}

function resetY(ball) {
    ball.vel.y = 0;
    ball.acc.y = 0;
}


addEventListener('devicemotion', e => {
    ball.acc.x = - e.accelerationIncludingGravity.x * 0.05;
    ball.acc.y = e.accelerationIncludingGravity.y * 0.05;
});

function drawBall(ball) {
    circle(
        ball.x,
        ball.y,
        100,
        100,
        0,
        'red'
    );
}