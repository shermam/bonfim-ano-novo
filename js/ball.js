import { limit } from "./math.js";
import { circle } from "./canvas.js";

export const ball = {
    x: 300,
    y: 300,
    vel: {
        x: 0,
        y: 0
    },
    acc: {
        x: 0,
        y: 0
    },
    update: function (e) {

        if (e) {
            ball.acc.x = - e.accelerationIncludingGravity.x * 0.05;
            ball.acc.y = e.accelerationIncludingGravity.y * 0.05;
        }

        ball.vel.x += ball.acc.x;
        ball.vel.y += ball.acc.y;

        ball.x = limit(ball.x + ball.vel.x, 0, innerWidth);
        ball.y = limit(ball.y + ball.vel.y, 0, innerHeight);

        if (ball.x === 0 || ball.x === innerWidth) {
            resetX(this);
        }

        if (ball.y === 0 || ball.y === innerHeight) {
            resetY(this);
        }
    },
    draw: function () {
        circle(
            this.x,
            this.y,
            100,
            100,
            0,
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