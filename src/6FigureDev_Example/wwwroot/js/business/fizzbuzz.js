'use strict';

export default function(number) {
  var result = '';

  if (number !== 0 && number % 3 === 0) {
    result += 'fizz';
  }

  if (number !== 0 && number % 5 === 0) {
    result += 'buzz';
  }

  return result || number;
};