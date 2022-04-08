const stringLength = require('./stringLength.js');

it('Work', () => {
    expect(stringLength('Hello World')).toBe('string should be between 1 and 10 length');
});

it('Work', () => {
    expect(stringLength('maen')).toBe(4);
});

it('Work', () => {
    expect(stringLength('maen mohammad')).toBe('string should be between 1 and 10 length');
});