document.getElementById("submit").addEventListener("click", calculateTip);

function calculateTip(event) {
  event.preventDefault();
  const totalPrice = Number(document.getElementById("total-price").value);
  const tipPercentage = Number(document.getElementById("tip-percentage").value);
  const tip = (totalPrice * tipPercentage) / 100;
  const newTotal = totalPrice + tip;
  document.getElementById("tip-amount").textContent = tip.toFixed(2);
  document.getElementById("new-total").textContent = newTotal.toFixed(2);
}
