const { NotImplementedError } = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let res = arr.slice();
  for (let i = 0; i < res.length - 1; i += 1) {
    if (res[i] === -1) continue;
    for (let j = i + 1; j < res.length; j += 1) {
      if (res[j] === -1) continue;
      if (res[i] > res[j]) {
        [res[i], res[j]] = [res[j], res[i]];
      }
    }
  }
  return res;
}

module.exports = {
  sortByHeight
};
