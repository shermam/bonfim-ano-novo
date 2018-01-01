import { limit } from "./math.js";
import { circle, rect } from "./canvas.js";
import { touches } from "./touch.js";
import { touchRadiusFactor } from "./handleTouches.js";
import Vec from "./vec.js";

export default class Ball {

    constructor(pos, radius) {
        this.pos = pos;
        this.vel = new Vec(0, 0);
        this.acc = new Vec(0, 0);
        this.radius = radius;
    }

    update(orientationEvent) {

        if (orientationEvent) {

            this.acc.set(orientationEvent.accelerationIncludingGravity);
            this.acc.multiply(0.05);

            //hack to invert the x force
            this.acc.x *= -1;
        }

        this.vel.add(this.acc);

        let newX = limit(this.pos.x + this.vel.x, 0, innerWidth - this.radius);
        let newY = limit(this.pos.y + this.vel.y, 0, innerHeight - (this.radius + 50));

        if (!this.isTouchingX(newX, touches)) {
            this.pos.x = newX;
        } else {
            this.resetX();
        }

        if (!this.isTouchingY(newY, touches)) {
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
            'red'
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

    isTouchingX(newX, touches) {

        if (!touches) {
            return false;
        }

        for (const touch of touches) {

            const ballRight = newX + this.radius;
            const ballLeft = newX;
            const ballTop = this.pos.y;
            const ballBottom = this.pos.y + this.radius;

            const touchRight = touch.pageX + touch.radiusX * touchRadiusFactor;
            const touchLeft = touch.pageX;
            const touchTop = touch.pageY;
            const touchBottom = touch.pageY + touch.radiusX * touchRadiusFactor;

            if (ballBottom >= touchTop &&
                ballTop <= touchBottom) {

                if (this.acc.x > 0 &&
                    ballRight >= touchLeft &&
                    ballLeft <= touchRight
                ) {
                    return true;
                }

                if (this.acc.x < 0 &&
                    ballLeft <= touchRight &&
                    ballRight >= touchLeft
                ) {
                    return true;
                }
            }

        }
    }

    isTouchingY(newY, touches) {

        if (!touches) {
            return false;
        }

        for (const touch of touches) {

            const ballRight = this.pos.x + this.radius;
            const ballLeft = this.pos.x;
            const ballTop = newY;
            const ballBottom = newY + this.radius;

            const touchRight = touch.pageX + touch.radiusX * touchRadiusFactor;
            const touchLeft = touch.pageX;
            const touchTop = touch.pageY;
            const touchBottom = touch.pageY + touch.radiusX * touchRadiusFactor;

            if (ballRight >= touchLeft &&
                ballLeft <= touchRight) {

                if (this.acc.y > 0 &&
                    ballBottom >= touchTop &&
                    ballTop <= touchBottom
                ) {
                    return true;
                }

                if (this.acc.y < 0 &&
                    ballTop <= touchBottom &&
                    ballBottom >= touchTop
                ) {
                    return true;
                }
            }

        }
    }
};

