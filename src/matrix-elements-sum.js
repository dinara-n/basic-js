const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  let arr = new Array(matrix[0].length);
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (arr[j] !== 0) {
        sum += matrix[i][j];
      }
      if (matrix[i][j] === 0) {
        arr[j] = 0;
      }
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
