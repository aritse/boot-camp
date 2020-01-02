let c = 0;

const setText = () => (document.getElementById("count").textContent = c);

document.getElementById("increment").addEventListener("click", () => {
  c++;
  setText();
});

document.getElementById("decrement").addEventListener("click", () => {
  if (c > 0) {
    c--;
    setText();
  }
});
