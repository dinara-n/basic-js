const { NotImplementedError } = require('../extensions/index.js');

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
  str = String(str);
  repeatTimes = options.repeatTimes || 0;
  options.separator = options.separator ?? '+';
  options.addition = (options.addition !== undefined) ? String(options.addition) : '';
  additionRepeatTimes = options.additionRepeatTimes || 0;
  options.additionSeparator = options.additionSeparator ?? '|';
  let resAddition = (options.additionRepeatTimes === 0) ? options.addition : new Array(options.additionRepeatTimes).fill(options.addition).join(options.additionSeparator);
  let res = (options.repeatTimes === 0) ? str : new Array(options.repeatTimes).fill(str + resAddition).join(options.separator);
  return res;
}

module.exports = {
  repeater
};
