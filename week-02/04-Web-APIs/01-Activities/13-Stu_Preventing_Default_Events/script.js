document.getElementById("submit").addEventListener("click", calculateTip);

function calculateTip(event) {
  event.preventDefault();
  let tip = document.getElementById("total-price").value * document.getElementById("tip-percentage");
}
