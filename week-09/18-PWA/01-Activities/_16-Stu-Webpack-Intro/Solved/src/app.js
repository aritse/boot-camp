const calculations = require("./calculations");

const priceEl = document.getElementById("price");
const balanceEl = document.getElementById("balance");
const expenseEl = document.getElementById("expense");
const expensesListEl = document.getElementById("expenses-list");
const submitBtn = document.getElementById("submit");
const resetBtn = document.getElementById("reset");
const budgetEl = document.getElementById("budget");

function addToList(name, price) {
  expensesListEl.innerHTML += `<li class="list-group-item">Name: ${name}
    <span class="ml-4">Price: ${price}</span></li>`;
}

function submit(e) {
  e.preventDefault();
  balanceEl.textContent = calculations.subtract(parseInt(balanceEl.textContent), priceEl.value);
  addToList(expenseEl.value, priceEl.value);
}

function reset(e) {
  e.preventDefault();
  expensesListEl.innerHTML = "";
  balanceEl.textContent = budgetEl.textContent;
  priceEl.value = "";
  expenseEl.value = "";
}

submitBtn.onclick = submit;
resetBtn.onclick = reset;
