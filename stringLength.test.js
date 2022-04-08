const stringLength = require('./stringLength.js');

it('Work', () => {
    expect(stringLength('Hello World')).toBe(11);
});

it('Work', () => {
    expect(stringLength('maen')).toBe(4);
});