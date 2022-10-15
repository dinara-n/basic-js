const { NotImplementedError } = require('../extensions/index.js');

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
  if (str === '') {
    return '';
  }
  let arr = str.split('');
  let letter = arr[0];
  let count = 0;
  let res = '';
  arr.forEach((elem) => {
    if (elem === letter) {
      count += 1;
    } else {
      res = (count === 1) ? res + letter : res + count + letter;
      letter = elem;
      count = 1;
    }
  })
  res = (count === 1) ? res + letter : res + count + letter;
  return res;
}

module.exports = {
  encodeLine
};
