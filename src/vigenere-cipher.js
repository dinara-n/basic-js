const { NotImplementedError } = require('../extensions/index.js');

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
  constructor(value) {
    // if (value === true || value === '') {
    //   this.directMachine = true;
    // } else {

    // }
    this.directMachine = (value === true || value === undefined) ? true : false;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    let res = [];
    for (let i = 0, j = 0; i < message.length; i++) {
      if (this.alphabet.includes(message[i].toUpperCase())) {
        let messageIndex = this.alphabet.indexOf(message[i].toUpperCase());
        let keyIndex = this.alphabet.indexOf(key[j].toUpperCase());
        let newIndex = messageIndex + keyIndex;
        newIndex = (newIndex >= this.alphabet.length) ? (newIndex - this.alphabet.length) : newIndex;
        res.push(this.alphabet[newIndex]);
        j++;
      } else {
        res.push(message[i].toUpperCase());
      }
      j = (j === key.length) ? 0 : j;
    }
    if (this.directMachine) {
      return res.join('');
    } else {
      return res.reverse().join('');
    }
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }
    let res = [];
    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      if (this.alphabet.includes(encryptedMessage[i].toUpperCase())) {
        let encryptedMessageIndex = this.alphabet.indexOf(encryptedMessage[i].toUpperCase());
        let keyIndex = this.alphabet.indexOf(key[j].toUpperCase());
        let newIndex = encryptedMessageIndex - keyIndex;
        newIndex = (newIndex < 0) ? (this.alphabet.length + newIndex) : newIndex;
        res.push(this.alphabet[newIndex]);
        j++;
      } else {
        res.push(encryptedMessage[i].toUpperCase());
      }
      j = (j === key.length) ? 0 : j;
    }
    if (this.directMachine) {
      return res.join('');
    } else {
      return res.reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
