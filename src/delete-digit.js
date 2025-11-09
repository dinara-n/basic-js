const { NotImplementedError } = require('../lib');

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
  const arr = n.toString().split('');
  let res = 0;
  for (let i = 0; i < arr.length; i += 1) {
    const newN = +arr.reduce((sum, elem, j) => {
      return (j !== i) ? sum + elem : sum;
    }, 0);
    if (newN > res) {
      res = newN;
    }
  }
  return res;
}

module.exports = {
  deleteDigit
};
