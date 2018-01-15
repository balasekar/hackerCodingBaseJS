const moduleToBeTested = require('./index');
// Natural language-like assertions
var expect = require('chai').expect;

describe('Arithmetic Operations', () => {
    describe('Area', () => {
        it('Test if Area is calculated Properly', () => {
            expect(moduleToBeTested.getArea(2,2)).to.equal(4);
        });
    }),
    describe('Perimeter', () => {
        it('Test if Perimeter is calculated Properly', () => {
            expect(moduleToBeTested.getPerimeter(2,2)).to.equal(8);
        });
    });
});