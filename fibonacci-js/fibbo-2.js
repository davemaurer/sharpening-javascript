// Recursive

var fibboRecursive = function (n, numbers) {
  var length, lastNumber, secondToLastNumber;

  if (!numbers) { numbers = [0, 1] }

  length = numbers.length;
  lastNumber = numbers[length -1];
  secondToLastNumber= numbers[length -2];

  if (numbers.length >= n) { return lastNumber; }

  numbers.push(lastNumber + secondToLastNumber);

  return fibboRecursive(n, numbers)
};
