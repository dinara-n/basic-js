const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options;
  const actualAddition = (typeof addition === 'undefined') ? '' : String(addition);
  const additions = new Array(additionRepeatTimes ?? 1).fill(actualAddition).join(additionSeparator ?? '|');
  return new Array(repeatTimes ?? 1).fill(str + additions).join(separator ?? '+');
}

module.exports = {
  repeater
};
