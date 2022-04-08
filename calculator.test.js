
const calculator = require('./calculator.js');
const cal = new calculator();

describe('test add function', () => {
    it('Work', () => {
        expect(cal.add(5, 20)).toBe(25);
    })
    it('Work', () => {
        expect(cal.add(-5, 25)).toBe(20);
    })
    it('Work', () => {
        expect(cal.add(-2, -4)).toBe(-6);
    })
    it('Work', () => {
        expect(cal.add(300, 99)).toBe(399);
    })
});



describe('test add function', () => {
    it('Work', () => {
        expect(cal.subtract(50, 10)).toBe(40);
    })
    it('Work', () => {
        expect(cal.subtract(20, -5)).toBe(25);
    })
    it('Work', () => {
        expect(cal.subtract(-2, -4)).toBe(2);
    })
    it('Work', () => {
        expect(cal.subtract(-300, 99)).toBe(-399);
    })
});

describe('test add function', () => {
    it('Work', () => {
        expect(cal.divide(20, 5)).toBe(4);
    })
    it('Work', () => {
        expect(cal.divide(50, 100)).toBe(0.5);
    })
    it('Work', () => {
        expect(cal.divide(3, 2)).toBe(1.5);
    })
    it('Work', () => {
        expect(cal.divide(21, 7)).toBe(3);
    })
});

describe('test add function', () => {
    it('Work', () => {
        expect(cal.multiply(5, 2)).toBe(10);
    })
    it('Work', () => {
        expect(cal.multiply(-5, 2)).toBe(-10);
    })
    it('Work', () => {
        expect(cal.multiply(-2, -4)).toBe(8);
    })
    it('Work', () => {
        expect(cal.multiply(11, 12)).toBe(132);
    })
});