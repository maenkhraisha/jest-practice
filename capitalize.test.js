
const capitalize = require('./capitalize.js');

it('work', () => {
    expect(capitalize('maen')).toBe('Maen');
});
it('work', () => {
    expect(capitalize('camel')).toBe('Camel');
});
it('work', () => {
    expect(capitalize('hello world')).toBe('Hello world');
});