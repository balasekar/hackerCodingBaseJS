const moduleToBeTested = require('./index');
// Natural language-like assertions
var expect = require('chai').expect;

describe.only('Try Catch Finally', () => {
    describe('Reverse String', () => {
        it('Check if 1234 is reversed', () => {
            expect(moduleToBeTested.reverseString('1234')).to.equal('4321');
        });
    });
});