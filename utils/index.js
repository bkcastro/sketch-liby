/**
 * Utility used to help make sketches.
 */

/**
 * Return a random number between the range of a and b.
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
export function random(a = 1, b) {
    
    if (b === undefined) b = 0;

    if (a > b) {
        const temp = b;
        b = a;
        a = temp;
    }

    return (Math.random() * (b-a)) + a;
}

/**
 * Floor round the random function.
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

/**
 * RGBA prototype object.
 */
const rgbaPrototype = {
    get r() {
        return randomR(255);
    },
    get g() {
        return randomR(255);
    },
    get b() {
        return randomR(255);
    },
    get a() {
        return random();
    },
};

/**
 * Return a random rgb color.
 *
 * @param {obj} args
 * @return {string}
 */
export function rgb(args = {}) {
    
    Object.setPrototypeOf(args, rgbaPrototype);

    return `rgb(${args.r}, ${args.g}, ${args.b})`;
}
    
/**
 * Return a random color by default in hsl.
 *
 * @param {object} args
 * @return {string}
 */
export function color(args = {}) {
    
}
