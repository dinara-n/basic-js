const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let obj = {};
  let res = [];
  names.forEach((elem) => {
    let elemRoot = '';
    if (elem.includes('(') && elem[elem.length - 1] === ')') {
      elemRoot = elem.split('').slice(0, elem.lastIndexOf('(')).join('');
    }
    if (elem in obj) {
      res.push(`${elem}(${obj[elem]})`);
      obj[elem] += 1;
    } else if (elemRoot && res.includes(elem)) {
      obj[elem] = 1;
      res.push(`${elem}(${obj[elem]})`);
    } else {
      obj[elem] = 1;
      res.push(elem);
    }
  })
  return res;
}

module.exports = {
  renameFiles
};
