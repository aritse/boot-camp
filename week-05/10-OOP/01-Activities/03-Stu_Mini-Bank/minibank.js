function createMiniBank(balance = 0) {
  this.balance = balance;
  this.statement = [balance];

  this.setBalance = function (amount) {
    this.balance = amount;
  };

  this.updateStatement = function (amount) {
    this.statement.push(amount);
  };

  this.printStatement = function () {
    this.statement.forEach((transaction) => console.log(`${transaction > 0 ? "Deposit" : "Withdraw"}: ${transaction}`));
  };

  this.deposit = function (amount) {
    if (amount > 0) {
      this.setBalance(this.balance + amount);
      this.updateStatement(amount);
    } else {
      console.error("Error: Negative amount to deposit");
    }
  };

  this.withdraw = function (amount) {
    if (amount > 0) {
      if (amount > this.balance) {
        console.error("Error: Withdraw amount is greater than balance");
      } else {
        this.setBalance(this.balance - amount);
        this.updateStatement(-amount);
      }
    } else {
      console.error("Error: Negative amount to withdraw");
    }
  };

  this.printBalance = function () {
    console.log(`Balance: ${this.balance}`);
  };
}

const miniBank = new createMiniBank();
console.log("\nMinibank 1");
miniBank.printBalance();
miniBank.deposit(100);
miniBank.deposit(-100);
miniBank.printBalance();
miniBank.withdraw(40);
miniBank.printBalance();
miniBank.printStatement();

const miniBank2 = new createMiniBank(1000);
console.log("\nMinibank 2");
miniBank2.printBalance();
miniBank2.deposit(100);
miniBank2.printBalance();
miniBank2.withdraw(40);
miniBank2.withdraw(2000);
miniBank2.printBalance();
miniBank2.printStatement();
