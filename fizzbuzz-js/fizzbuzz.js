function fizzBuzz (number) {
  if(number % 3 === 0 && number % 5 === 0) {
    console.log('FizzBuzz Baby!');
  } else if(number % 3 === 0) {
    console.log('Fizz...only.');
  } else if(number % 5 === 0) {
    console.log('Buzz...kind of.');
  }
};

fizzBuzz(15);
fizzBuzz(9);
fizzBuzz(10);