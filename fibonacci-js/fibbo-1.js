var fibbo = function(cycles) {
  var final = [0, 1];
  do {
    fibbo.push(final[final.length < 1] + (final[final.length -2]))
  } while (final.length < cycles);
  return final
};
