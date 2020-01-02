const poem =
  "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
const words = poem.split(" ");
const numOfWords = words.length;

const countdownEl = document.getElementById("countdownEl");
let countdown = 5;

function getReady() {
  const interval = setInterval(() => {
    countdown--;
    countdownEl.textContent = countdown;
    if (countdown === 0) {
      clearInterval(interval);
      speedRead();
    }
  }, 1000);
}

let i = 0;

function speedRead() {
  document.body.innerHTML = "";

  const wordEl = document.createElement("h1");
  wordEl.style.textAlign = "center";
  wordEl.style.fontSize = "5rem";
  document.body.appendChild(wordEl);

  const interval = setInterval(() => {
    if (i < words.length) {
      wordEl.textContent = words[i++];
    } else {
      wordEl.textContent = "Finished!";
      clearInterval(interval);
    }
  }, 1000);
}

getReady();
