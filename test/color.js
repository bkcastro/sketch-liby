import { describe, it } from 'node:test';
import assert from 'node:assert';        
import { random, randomR } from '../utils/random.js';
import { rgb } from '../utils/color.js'

const RGB_REGEX = /^rgb\(\d+, \d+, \d+\)$/;

describe('rgb', async () => {

    await it('no parameters', () => {
        
        var res = Array.from({ length: 10 }, () => rgb());
        
        res.forEach((color) => assert.ok(RGB_REGEX.test(color)));
    });

    await it('one parameter r', () => {
        
        var res = Array.from({ length: 10 }, () => rgb({ r: 10 }));
        
        res.forEach((color) => assert.ok(RGB_REGEX.test(color)));
    });

    await it('two parameters r and g', () => {
        
        var res = Array.from({ length: 10 }, () => rgb({ r: 10, g: 11 }));
        
        res.forEach((color) => assert.ok(RGB_REGEX.test(color)));
    });

    await it('two parameters g and b', () => {
        
        var res = Array.from({ length: 10 }, () => rgb({ g: 10, b: 11 }));
        
        res.forEach((color) => assert.ok(RGB_REGEX.test(color)));
    });

    await it('three parameters r, g and b', () => {
        
        var res = Array.from({ length: 10 }, () => rgb({ r: 10, g: 11, b: 100 }));
        
        res.forEach((color) => assert.ok(RGB_REGEX.test(color)));
    });


    await it('one parameter with random function should fail regex', () => {
        
        var res = Array.from({ length: 10 }, () => rgb({ r: random(255) }));
        
        res.forEach((color) => assert.ok(RGB_REGEX.test(color) == false));
    });

    await it('one parameter with randomR function', () => {
        
        var res = Array.from({ length: 10 }, () => rgb({ r: randomR(255) }));
        
        res.forEach((color) => assert.ok(RGB_REGEX.test(color)));
    });
});

