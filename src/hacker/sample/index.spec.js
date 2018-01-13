const moduleToBeTested = require('./index');
// Natural language-like assertions
var expect = require('chai').expect;

describe('TestSample', () => {
    describe('Test1', () => {
        it('Test if this works', () => {
            expect(moduleToBeTested.test()).to.equal('This is a test');
        });
    });
});