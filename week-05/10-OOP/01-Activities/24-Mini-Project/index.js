const randomWords = require("random-words");
const Word = require("./lib/Word");
const inquirer = require("inquirer");

async function play() {
  let randomWord = "";
  while (randomWord.length < 8) randomWord = randomWords();

  let word = new Word(randomWord);

  console.log(word.toString());
  while (!word.guessedCorrectly()) {
    const { guess } = await inquirer.prompt([{ type: "input", name: "guess", message: "Give me a letter: " }]);
    const count = word.guessLetter(guess);
    if (count > 0) {
      const singular = `is one ${guess}.`;
      const plural = `are ${count} ${guess}'s.`;
      console.log(`Yes, there ${count > 1 ? plural : singular}`);
      console.log(word.toString());
    } else {
      console.log(`There is no ${guess}.`);
    }
  }
  console.log(`You guessed the word correctly: ${randomWord}`);
  process.exit();
}

play();
