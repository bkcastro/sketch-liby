/**
 * Process user input and start the animation. 
 *
 * @param {function} callback
 * @param {number} fps
 * @return {void}
 */
let lastTime = 0;
let framesPerSecond = 1;
let frameInterval = 1000 / framesPerSecond;
let globalRender = () => {};

export function animate(render=()=>{}, fps=30) {
     
    if (!Number.isInteger(fps)) throw new Error('fps needs to be a valid integer number');

    framesPerSecond = fps;
    frameInterval = 1000 / framesPerSecond;
    globalRender = render;

    console.log("fps set to: ", framesPerSecond);

    // Start the animation.
    _animate();

}

/**
 * Control the frames per second of a render.
 *
 * @param {function} render
 * @return {void}
 */
function _animate(currentTime=0) {

    requestAnimationFrame(_animate);

    let deltaTime = currentTime - lastTime;

    if (deltaTime > frameInterval) {
        // Reset last time and account for any leftover time lag
        lastTime = currentTime - (deltaTime % frameInterval);
    
        globalRender(currentTime, deltaTime);
    }
}
