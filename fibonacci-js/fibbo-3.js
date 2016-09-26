// ES6 syntax

var fibboES6 = function(n, numbers = [0, 1]) {
  var[secondToLast, last] = numbers.slice(numbers.length -2);

  if (numbers.length >= n) { return last; }

  numbers.push(last + secondToLast);

  return fibboES6(n, numbers);
};
