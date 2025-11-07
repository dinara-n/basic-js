const { NotImplementedError } = require('../lib');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  return matrix.reduce((number, arr) => {
    return number + arr.reduce((number, item) => {
      return (item === '^^') ? number + 1 : number;
    }, 0);
  }, 0);
  // let res = 0;
  // for (let arr of matrix) {
  //   for (let item of arr) {
  //     res = (item === '^^') ? res + 1 : res;
  //   }
  // }
  // return res;
}

module.exports = {
  countCats
};
