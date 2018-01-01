import { limit } from "./math.js";
import { circle, rect } from "./canvas.js";
import { touches } from "./touch.js";
import Vec from "./vec.js";

export default class Ball {

    constructor(pos, radius, color) {
        this.pos = pos;
        this.vel = new Vec(0, 0);
        this.acc = new Vec(0, 0);
        this.radius = radius;
        this.color = color;
    }

    update(orientationEvent, balls) {

        if (orientationEvent) {

            this.acc.set(orientationEvent.accelerationIncludingGravity);
            this.acc.multiply(0.05);

            //hack to invert the x force
            this.acc.x *= -1;
        }

        this.vel.add(this.acc);

        let newX = limit(this.pos.x + this.vel.x, 0, innerWidth - this.radius);
        let newY = limit(this.pos.y + this.vel.y, 0, innerHeight - (this.radius + 50));

        if (!this.isTouchingX(newX, touches.concat(balls))) {
            this.pos.x = newX;
        } else {
            this.resetX();
        }

        if (!this.isTouchingY(newY, touches.concat(balls))) {
            this.pos.y = newY;
        } else {
            this.resetY();
        }

        if (this.pos.x === 0 || this.pos.x === innerWidth - this.radius) {
            this.resetX();
        }

        if (this.pos.y === 0 || this.pos.y === innerHeight - (this.radius + 50)) {
            this.resetY();
        }
    }

    draw() {
        rect(
            this.pos.x,
            this.pos.y,
            this.radius,
            this.radius,
            this.color
        );
    }

    resetX() {
        this.vel.x = 0;
        this.acc.x = 0;
    }

    resetY() {
        this.vel.y = 0;
        this.acc.y = 0;
    }

    isTouchingX(newX, otherBalls) {

        if (!otherBalls) {
            return false;
        }

        for (const otherBall of otherBalls) {

            if (otherBall === this) {
                continue;
            }

            const ballRight = newX + this.radius;
            const ballLeft = newX;
            const ballTop = this.pos.y;
            const ballBottom = this.pos.y + this.radius;

            const otherBallRight = otherBall.pos.x + otherBall.radius;
            const otherBallLeft = otherBall.pos.x;
            const otherBallTop = otherBall.pos.y;
            const otherBallBottom = otherBall.pos.y + otherBall.radius;

            if (ballBottom >= otherBallTop &&
                ballTop <= otherBallBottom) {

                if (this.acc.x > 0 &&
                    ballRight >= otherBallLeft &&
                    ballLeft <= otherBallRight
                ) {
                    return true;
                }

                if (this.acc.x < 0 &&
                    ballLeft <= otherBallRight &&
                    ballRight >= otherBallLeft
                ) {
                    return true;
                }
            }

        }
    }

    isTouchingY(newY, otherBalls) {

        if (!otherBalls) {
            return false;
        }

        for (const otherBall of otherBalls) {

            if (otherBall === this) {
                continue;
            }

            const ballRight = this.pos.x + this.radius;
            const ballLeft = this.pos.x;
            const ballTop = newY;
            const ballBottom = newY + this.radius;

            const otherBallRight = otherBall.pos.x + otherBall.radius;
            const otherBallLeft = otherBall.pos.x;
            const otherBallTop = otherBall.pos.y;
            const otherBallBottom = otherBall.pos.y + otherBall.radius;

            if (ballRight >= otherBallLeft &&
                ballLeft <= otherBallRight) {

                if (this.acc.y > 0 &&
                    ballBottom >= otherBallTop &&
                    ballTop <= otherBallBottom
                ) {
                    return true;
                }

                if (this.acc.y < 0 &&
                    ballTop <= otherBallBottom &&
                    ballBottom >= otherBallTop
                ) {
                    return true;
                }
            }

        }
    }
};