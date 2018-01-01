import { limit } from "./math.js";
import { circle, rect } from "./canvas.js";
import { touches } from "./touch.js";
import { touchRadiusFactor } from "./handleTouches.js";

export const ball = {
    x: 300,
    y: 300,
    radius: 100,
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
        let newY = limit(ball.y + ball.vel.y, 0, innerHeight - (ball.radius + 50));

        if (!isTouchingX(ball, newX, touches)) {
            ball.x = newX;
        } else {
            resetX(this);
        }

        if (!isTouchingY(ball, newY, touches)) {
            ball.y = newY;
        } else {
            resetY(this);
        }

        if (ball.x === 0 || ball.x === innerWidth - ball.radius) {
            resetX(this);
        }

        if (ball.y === 0 || ball.y === innerHeight - (ball.radius + 50)) {
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

        const touchRight = touch.pageX + touch.radiusX * touchRadiusFactor;
        const touchLeft = touch.pageX;
        const touchTop = touch.pageY;
        const touchBottom = touch.pageY + touch.radiusX * touchRadiusFactor;

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

function isTouchingY(ball, newY, touches) {

    if (!touches) {
        return false;
    }

    for (const touch of touches) {

        const ballRight = ball.x + ball.radius;
        const ballLeft = ball.x;
        const ballTop = newY;
        const ballBottom = newY + ball.radius;

        const touchRight = touch.pageX + touch.radiusX * touchRadiusFactor;
        const touchLeft = touch.pageX;
        const touchTop = touch.pageY;
        const touchBottom = touch.pageY + touch.radiusX * touchRadiusFactor;

        if (ballRight >= touchLeft &&
            ballLeft <= touchRight) {

            if (ball.acc.y > 0 &&
                ballBottom >= touchTop &&
                ballTop <= touchBottom
            ) {
                return true;
            }

            if (ball.acc.y < 0 &&
                ballTop <= touchBottom &&
                ballBottom >= touchTop
            ) {
                return true;
            }
        }

    }
}