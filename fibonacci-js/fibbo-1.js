var fibbo = function(cycles) {
  var numbers = [0, 1];
  do {
    numbers.push(numbers[numbers.length - 1] + numbers[numbers.length - 2]);
  } while (numbers.length < cycles);
  return numbers[numbers.length - 1]
};
