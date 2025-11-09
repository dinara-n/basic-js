const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = {};
  for (let domain of domains) {
    const arr = domain.split('.').reverse();
    for (let i = 0; i < arr.length; i += 1) {
      const str = `.${arr.slice(0, i + 1).join('.')}`;
      if (str in res) {
        res[str] += 1;
      } else {
        res[str] = 1;
      }
    }
  }
  return res;
}

module.exports = {
  getDNSStats
};
