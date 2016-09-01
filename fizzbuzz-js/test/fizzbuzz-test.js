var fb = require('../fizzBuzz');
var chai = require('chai');
var assert = chai.assert;

describe('fizzBuzz', function() {
  it('should return Fizz if the number is divisible by 3', function() {
    assert.equal(fb.fizzBuzzer(3), 'Fizz...only.');
    assert.equal(fb.fizzBuzzer(9), 'Fizz...only.');
  })
});
