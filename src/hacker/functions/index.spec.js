const moduleToBeTested = require('./index');
const expect = require('chai').expect;

describe(' Functions in JS ', () => {
    describe( 'Factorial', () => {
        it('Check if Factorial works fine for simple', () => {
            expect(moduleToBeTested.factorial(2)).to.equal(2);
        }),
        it('Check if Factorial works fine for complex', () => {
            expect(moduleToBeTested.factorial(4)).to.equal(24);
        });
    });
});