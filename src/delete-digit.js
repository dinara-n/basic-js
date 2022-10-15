const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  let arr = n.toString().split('');
  arr.forEach((_, i) => {
    let arrCopy = arr.slice();
    arrCopy.splice(i, 1);
    let current = Number(arrCopy.join(''));
    max = (current > max) ? current : max;
  })
  return max;
}

module.exports = {
  deleteDigit
};
