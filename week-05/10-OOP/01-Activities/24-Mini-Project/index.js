const Word = require("./lib/Word");
const inquirer = require("inquirer");
const randomWords = require("random-words");

async function start() {
  let rw = randomWords();
  console.log(rw);
  let word = new Word(rw);
  word.toString();
  //   console.log(word);

  while (!word.guessedCorrectly()) {
    const guess = await inquirer.prompt([{ type: "input", name: "guess", message: "What is your guess?" }]);
    word.guessLetter(guess);
    console.log(word);
  }
  //  keeps track of the user's remaining guesses
}

start();
