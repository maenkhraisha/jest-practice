const { it, expect } = require('@jest/globals');
const reverseString = require('./reverseString.js');

it('work', () => {
    expect(reverseString('maen')).toBe('neam');
});

it('work', () => {
    expect(reverseString('hello')).toBe('olleh');
});