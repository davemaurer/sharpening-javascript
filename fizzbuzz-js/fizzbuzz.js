exports.fizzBuzzer = function(number) {
  if(number % 3 === 0 && number % 5 === 0) {
    return 'FizzBuzz Baby!';
  } else if(number % 3 === 0) {
    return 'Fizz...only.';
  } else if(number % 5 === 0) {
    return 'Buzz...kind of.';
  } else {
    return 'Not even a zzz. Sorry...'
  }
};
