const moduleToBeTested = require('./index');
// Natural language-like assertions
var expect = require('chai').expect;

describe('recursive Digit Sum', () => {
    describe('Digit Sum', () => {
        it('Test if digit Sum works correctly', () => {
            expect(moduleToBeTested.digitSum(148, 3)).to.equal('3');
        });
    });
});