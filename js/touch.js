export let touches = [];

['touchstart', 'touchmove'].forEach(evName => {
    addEventListener(evName, setTouchList);
});

function setTouchList(e) {
    //e.preventDefault();
    for (const t of e.touches) {
        touches.push(t);
    }
    //touches = e.touches;
}