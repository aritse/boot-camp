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
    return count > 0;
  }

  guessedCorrectly() {
    return this.word.every(letter => letter.visible);
  }

  toString() {
    console.log("toString() in word is called.");

    this.word.toString();
  }
}

module.exports = Word;
