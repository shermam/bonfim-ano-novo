export default class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(vec2) {
        return new Vec(this.x + vec2.x, this.y + ve2.y)
    }
}