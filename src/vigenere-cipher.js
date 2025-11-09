const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isNotReverse = true) {
    this.isNotReverse = isNotReverse;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    this.alphabetLength = this.alphabet.length;
  }
  encrypt(message, key) {
    if (typeof message === 'undefined' || typeof key === 'undefined') throw new Error('Incorrect arguments!');
    let i = 0;
    const encrypted = message.split('')
      .map((elem) => {
        const messageIndex = this.alphabet.indexOf(elem.toUpperCase());
        const keyIndex = this.alphabet.indexOf(key[i].toUpperCase());
        if (messageIndex === -1) return elem.toUpperCase();
        const sumIndex = messageIndex + keyIndex;
        let res = this.alphabet[sumIndex < this.alphabetLength ? sumIndex : sumIndex - this.alphabetLength];
        i = (i < key.length - 1) ? i += 1 : 0;
        return res;
      })
      .join('');
    return (this.isNotReverse) ? encrypted : encrypted.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (typeof encryptedMessage === 'undefined' || typeof key === 'undefined') throw new Error('Incorrect arguments!');
    let i = 0;
    const decrypted = encryptedMessage.split('')
      .map((elem) => {
        const messageIndex = this.alphabet.indexOf(elem.toUpperCase());
        const keyIndex = this.alphabet.indexOf(key[i].toUpperCase());
        if (messageIndex === -1 || keyIndex === -1) return elem.toUpperCase();
        const diffIndex = messageIndex - keyIndex;
        let res = this.alphabet[diffIndex >= 0 ? diffIndex : diffIndex + this.alphabetLength];
        i = (i < key.length - 1) ? i += 1 : 0;
        return res;
      })
      .join('');
    return (this.isNotReverse) ? decrypted : decrypted.split('').reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
