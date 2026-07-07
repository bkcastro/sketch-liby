import { describe, it } from 'node:test';
import assert from 'node:assert';

import { random, randomF, randomR } from '../utils/random.js';

describe('random', async () => {

    await it('no parameters', async () => {

        var res = Array.from({length: 10}, () => random()); 

        res.forEach((val) => assert.ok( val <= 1));
    });
    
    await it('one parameter', async () => {

        const a = 10;
        var res = Array.from({length: 10}, () => random(a)); 
    
        res.forEach((val) => assert.ok((val <= a)));
    });
    
    await it('two parameters a < b', async () => {

        const a = 1; 
        const b = 10;
        
        var res = Array.from({ length: 10 }, () => random(a, b));

        res.forEach((val) => assert.ok((val >= a && val <= b)));
    });

    await it('two parameters a > b', async () => {

        const a = 10;
        const b = 1;

        var res = Array.from({ length: 10 }, () => random(a, b));
       
        res.forEach((val) => assert.ok((val >= b && val <= a)));
    });

    await it('a is negative', async () => {

        const a = -1;

        var res = Array.from({ length: 10 }, () => random(a));
       
        res.forEach((val) => assert.ok(val >= a && val <= 0));
    });

    await it('a is negative and b is positive', async () => {

        const a = -10;
        const b = 10;

        var res = Array.from({ length: 10 }, () => random(a, b));
       
        res.forEach((val) => assert.ok(val <= b && val >= a));
    });

    await it('a is negative and b is negative', async () => {

        const a = -10;
        const b = -5;

        var res = Array.from({ length: 10 }, () => random(a, b));
       
        res.forEach((val) => assert.ok(val <= b && val >= a));
    });
        
    await it('a is positive and b is negative', async () => {

        const a = 10;
        const b = -5;

        var res = Array.from({ length: 10 }, () => random(a, b));
       
        res.forEach((val) => assert.ok(val >= b && val <= a));
    });
});

describe('randomF', async () => {

    await it('no parameters', async () => {

        var res = Array.from({length: 10}, () => randomF()); 

        res.forEach((val) => assert.ok(Number.isInteger(val) && val <= 1));
    });
    
    await it('one parameter', async () => {

        const a = 10;
        var res = Array.from({length: 10}, () => randomF(a)); 
    
        res.forEach((val) => assert.ok(Number.isInteger(val) && val <= a));
    });
    
    await it('two parameters a < b', async () => {

        const a = 1; 
        const b = 10;
        
        var res = Array.from({ length: 10 }, () => randomF(a, b));

        res.forEach((val) => assert.ok((Number.isInteger(val) && val >= a && val <= b)));
    });

    await it('two parameters a > b', async () => {

        const a = 10;
        const b = 1;

        var res = Array.from({ length: 10 }, () => randomF(a, b));
       
        res.forEach((val) => assert.ok(((Number.isInteger(val) && val >= b && val <= a))));
    });
        
});

describe('randomR', async () => {

    await it('no parameters', async () => {

        var res = Array.from({length: 10}, () => randomR()); 

        res.forEach((val) => assert.ok(Number.isInteger(val) && val == 1 || val == 0));
    });
    
    await it('one parameter', async () => {

        const a = 10;
        var res = Array.from({length: 10}, () => randomR(a)); 
    
        res.forEach((val) => assert.ok(Number.isInteger(val) && val <= a));
    });
    
    await it('two parameters a < b', async () => {

        const a = 1; 
        const b = 10;
        
        var res = Array.from({ length: 10 }, () => randomR(a, b));

        res.forEach((val) => assert.ok((Number.isInteger(val) && val >= a && val <= b)));
    });

    await it('two parameters a > b', async () => {

        const a = 10;
        const b = 1;

        var res = Array.from({ length: 10 }, () => randomR(a, b));
       
        res.forEach((val) => assert.ok((Number.isInteger(val) && val >= b && val <= a)));
    });
        
});
