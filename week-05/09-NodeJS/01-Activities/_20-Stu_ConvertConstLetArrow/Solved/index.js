const $root = document.querySelector("#root");

let score;
let targetScore;

const makeGuess = () => {
  const $score = document.querySelector("#root p");
  $score.textContent = "Score: " + score + " | " + "Target: " + targetScore;

  if (score > targetScore) {
    alert("You lost this round!");
    playRound();
  } else if (score === targetScore) {
    alert("You won this round!");
    playRound();
  }
};

const Crystal = function(color) {
<<<<<<< HEAD
  console.log(this);

=======
>>>>>>> upstream/master
  this.element = document.createElement("div");
  this.element.className = "crystal " + color;
  this.value = 0;

  this.element.addEventListener(
    "click",
    () => {
      score += this.value;
      makeGuess();
    },
    false
  );
};

Crystal.prototype.render = function(target) {
  this.value = Math.floor(Math.random() * 15) + 1;
  target.appendChild(this.element);
};

<<<<<<< HEAD
const crystals = [new Crystal("red"), new Crystal("blue"), new Crystal("green")];

const playRound = function() {
=======
const crystals = [
  new Crystal("red"),
  new Crystal("blue"),
  new Crystal("green")
];

const playRound = () => {
>>>>>>> upstream/master
  const fragment = document.createDocumentFragment();
  const $score = document.createElement("p");
  targetScore = Math.floor(Math.random() * 50) + 25;
  score = 0;
  $score.textContent = "Score: " + score + " | " + "Target: " + targetScore;
  crystals
<<<<<<< HEAD
    .sort(() => {
      return 0.5 - Math.random();
    })
=======
    .sort(() => 0.5 - Math.random())
>>>>>>> upstream/master
    .forEach(crystal => crystal.render(fragment));
  fragment.appendChild($score);
  $root.innerHTML = "";
  $root.appendChild(fragment);
};

playRound();
