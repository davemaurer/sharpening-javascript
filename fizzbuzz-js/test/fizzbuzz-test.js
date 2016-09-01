var fb = require('../fizzBuzz');
var chai = require('chai');
var assert = chai.assert;

describe('fizzBuzz', function() {
  it('should return Fizz if the number is divisible by 3', function() {
    assert.equal(fb.fizzBuzzer(3), 'Fizz...only.');
    assert.equal(fb.fizzBuzzer(9), 'Fizz...only.');
  });

  it('should return Buzz if the number is divisible by 5', function() {
    assert.equal(fb.fizzBuzzer(5), 'Buzz...kind of.');
    assert.equal(fb.fizzBuzzer(25), 'Buzz...kind of.');
  });

  it('returns FizzBuzz Baby! when the number is divisible by both 3 and 5', function() {
    assert.equal(fb.fizzBuzzer(15), 'FizzBuzz Baby!');
    assert.equal(fb.fizzBuzzer(30), 'FizzBuzz Baby!');
  });
});
