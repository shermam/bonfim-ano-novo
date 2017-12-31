export let mouseX = 0;
export let mouseY = 0;

addEventListener('mousemove', e => {
    mouseX = e.x;
    mouseY = e.y;
});