import { mouseX, mouseY } from "./mouse.js";
import { map } from "./math.js";

export function force() {
    return {
        accelerationIncludingGravity: {
            x: map(mouseX, 0, innerWidth, 5, -5),
            y: map(mouseY, 0, innerHeight, -5, 5)
        }
    }
}

