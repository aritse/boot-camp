class Letter {
  constructor(letter) {
    this.letter = letter;
    this.visible = !RegExp("[A-Za-z0-9]").test(letter);
  }

  toString() {
    return this.visible ? this.letter : "_";
  }

  guess(letter) {
    return this.letter === letter;
  }

  getSolution() {
    return this.letter;
  }
}

module.exports = Letter;
