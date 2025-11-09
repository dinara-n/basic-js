const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let letter = '';
  let sum = 0;
  let res = '';
  str.split('').forEach((elem) => {
    if (elem === letter) {
      sum += 1;
    } else {
      res = (sum === 0) ? res : res + `${(sum === 1) ? '' : sum}${letter}`;
      letter = elem;
      sum = 1;
    }
  })
  res = (sum === 0) ? res : res + `${(sum === 1) ? '' : sum}${letter}`;
  return res;
}

module.exports = {
  encodeLine
};
