const Letter = require("./Letter");

class Word {
  constructor(word) {
    this.word = word.split("").map(letter => new Letter(letter));
  }

  guessLetter(guess) {
    let count = 0;
    this.word.forEach(letter => {
      if (letter.guess(guess)) {
        letter.visible = true;
        count++;
      }
    });
    return count;
  }

  guessedCorrectly() {
    return this.word.every(letter => letter.visible);
  }

  toString() {
    let string = "";
    this.word.forEach(letter => (string += " " + letter.toString()));
    return string;
  }
}

module.exports = Word;
