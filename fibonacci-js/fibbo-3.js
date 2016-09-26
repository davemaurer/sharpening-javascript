// ES6 syntax

var fibboES6 = function(n, numbers = [0, 1]) {
  if (numbers.length >= n) { return numbers; }

  var[last, secondToLast] = numbers.slice(numbers.length -2);

  numbers.push(last + secondToLast);

  return fibboES6(n, numbers);
};
