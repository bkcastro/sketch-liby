import { random, randomR } from './random.js';

/**
 * RGBA prototype.
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
 * HSLA prototype.
 */
const hslaPrototype = {
    get h() {
        return randomR(360);
    },
    get s() {
        return randomR(100);
    },
    get l() {
        return randomR(100);
    },
    get a() {
        return Math.round(Math.random/100)*100;
    }
}

/**
 * Return a random hsl color.
 *
 * @param {obj} args
 * @return {string}
 */
export function hsl(args = {}) {
    
    Object.setPrototypeOf(args, hslaPrototype);

    return `hsl(${args.h}, ${args.s}%, ${args.l}%)`;
}

/**
 * Return a random color by default in hsl.
 *
 * @param {object} args
 * @return {string}
 */
export function color(args = {}) {
    
}
