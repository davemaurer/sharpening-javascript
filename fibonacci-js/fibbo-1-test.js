var fibbo = require('./fibbo-1');
var chai = require('chai');
var assert = chai.assert;

describe('fibbo', function() {
  it('should start with an array of the first two numbers', function() {
    assert.equal(fibbo.start, [0, 1]);
  });
});
