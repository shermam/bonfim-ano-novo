export default class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(factor) {
        if (this.isVector(factor)) {
            this.x += factor.x;
            this.y += factor.y;
        } else if (typeof factor === 'number') {
            this.x += factor;
            this.y += factor;
        }

        return this;
    }

    multiply(factor) {
        if (this.isVector(factor)) {
            this.x *= factor.x;
            this.y *= factor.y;
        } else if (typeof factor === 'number') {
            this.x *= factor;
            this.y *= factor;
        }

        return this;
    }

    set(factor) {
        if (this.isVector(factor)) {

            this.x = factor.x;
            this.y = factor.y;
        } else if (typeof factor === 'number') {
            this.x = factor;
            this.y = factor;
        }
        return this;
    }

    isVector(factor) {
        return factor &&
            typeof factor.x === 'number' &&
            typeof factor.y === 'number';
    }
}