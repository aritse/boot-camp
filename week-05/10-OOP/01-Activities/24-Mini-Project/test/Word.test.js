const Word = require("../lib/Word");

describe("Word class", () => {
  describe("guessLetter", () => {
    it("Correct guess returns number of occurrences", () => {
      expect(new Word("fish").guessLetter("i")).toBe(1);
    });

    it("Incorrect guess returns 0", () => {
      expect(new Word("fish").guessLetter("o")).toBe(0);
    });
  });

  describe("guessedCorrectly ", () => {
    it("returns true if all letters are correct", () => {
      const word = new Word("hi");
      word.guessLetter("h");
      word.guessLetter("i");
      expect(word.guessedCorrectly()).toBe(true);
    });
    it("returns false if at least one letter is incorrect", () => {
      const word = new Word("hi");
      word.guessLetter("h");
      word.guessLetter("a");
      expect(word.guessedCorrectly()).toBe(false);
    });
  });
});
