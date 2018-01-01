import { rect, canvas } from "./canvas.js";

const lineCount = 10;

export function drawCenario() {
    createCenario();
}

function createCenario() {
    const lineHeight = canvas.height / lineCount;
    const columnCount = canvas.width / lineHeight;

    for (let i = 0; i < lineCount; i++) {
        rect(0, i * lineHeight, canvas.width, lineHeight / 2, '#0000ff55');
    }

    for (let i = 0; i < columnCount; i++) {
        rect(i * lineHeight, 0, lineHeight / 2, canvas.height, '#0000ff55');
    }
}

