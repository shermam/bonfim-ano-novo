//@ts-check

/**
 * List of touchs from touch event
 * 
 * @type {TouchList}
 */
export let touches = null;

['touchstart', 'touchmove'].forEach(evName => {
    addEventListener(evName, setTouchList);
});

/**
 * Sets the global TouchList to the event's TouchList
 * 
 * @param {TouchEvent} e 
 */
function setTouchList(e) {
    //e.preventDefault();
    touches = e.touches;
}