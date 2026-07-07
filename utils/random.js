/**
 * Return a random number between the range of a and b.
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
export function random(a = 1, b = 0) {

    return (Math.random() * Math.abs(a - b)) + Math.min(a, b);
}

/**
 * Floor the random function.
 * 
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
export function randomF(a, b) {
    return Math.floor(random(a, b))
}

/**
 * Round the random function.
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
export function randomR(a, b) {
    return Math.round(random(a, b));
}
