import { limit } from "./math.js";
import { circle, rect } from "./canvas.js";
import { touches } from "./touch.js";

export const ball = {
    x: 300,
    y: 300,
    radius: 50,
    vel: {
        x: 0,
        y: 0
    },
    acc: {
        x: 0,
        y: 0
    },
    update: function (orientationEvent) {

        if (orientationEvent) {
            ball.acc.x = - orientationEvent.accelerationIncludingGravity.x * 0.05;
            ball.acc.y = orientationEvent.accelerationIncludingGravity.y * 0.05;
        }

        ball.vel.x += ball.acc.x;
        ball.vel.y += ball.acc.y;

        let newX = limit(ball.x + ball.vel.x, 0, innerWidth - ball.radius);
        let newY = limit(ball.y + ball.vel.y, 0, innerHeight - ball.radius * 2);

        if (!isTouchingX(ball, newX, touches)) {
            ball.x = newX;
        } else {
            resetX(this);
        }

        ball.y = newY;

        if (ball.x === 0 || ball.x === innerWidth) {
            resetX(this);
        }

        if (ball.y === 0 || ball.y === innerHeight) {
            resetY(this);
        }
    },
    draw: function () {
        rect(
            this.x,
            this.y,
            this.radius,
            this.radius,
            'red'
        );
    }
};

function resetX(ball) {
    ball.vel.x = 0;
    ball.acc.x = 0;
}

function resetY(ball) {
    ball.vel.y = 0;
    ball.acc.y = 0;
}

function isTouchingX(ball, newX, touches) {

    if (!touches) {
        return false;
    }

    for (const touch of touches) {

        const ballRight = newX + ball.radius;
        const ballLeft = newX;
        const ballTop = ball.y;
        const ballBottom = ball.y + ball.radius;

        const touchRight = touch.pageX + touch.radiusX * 50;
        const touchLeft = touch.pageX;
        const touchTop = touch.pageY;
        const touchBottom = touch.pageY + touch.radiusX * 50;

        if (ballBottom >= touchTop &&
            ballTop <= touchBottom) {

            if (ball.acc.x > 0 &&
                ballRight >= touchLeft &&
                ballLeft <= touchRight
            ) {
                return true;
            }

            if (ball.acc.x < 0 &&
                ballLeft <= touchRight &&
                ballRight >= touchLeft
            ) {
                return true;
            }
        }

    }
}