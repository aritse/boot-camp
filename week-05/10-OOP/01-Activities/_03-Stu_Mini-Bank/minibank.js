function MiniBank(balance = 0) {
  this.balance = balance;
  this.statement = [balance];

  // accessors
  this.setBalance = balance => (this.balance = balance);
  this.getBalance = () => this.balance;
  this.getStatement = () => this.statement;

  // operations
  this.printBalance = () => console.log("Balance:", this.getBalance());

  this.printStatement = () => {
    console.log("Statement:");
    this.getStatement().forEach(transaction => console.log(transaction));
  };

  this.deposit = amount => {
    if (amount > 0) {
      this.setBalance(this.getBalance() + amount);
      this.updateStatement(amount);
    } else console.log("Error: amount must be greater than 0");
  };

  this.withdraw = amount => {
    if (amount > 0) {
      const balance = this.getBalance();
      if (amount > balance) console.log("Error: amount must NOT be greater than balance");
      else {
        this.setBalance(balance - amount);
        this.updateStatement(-amount);
      }
    } else console.log("Error: amount must be greater than 0");
  };

  this.updateStatement = amount => this.statement.push(amount);
}

const miniBank = new MiniBank();
miniBank.printBalance();
miniBank.deposit(100);
miniBank.printBalance();
miniBank.withdraw(40);
miniBank.printBalance();
miniBank.printStatement();

const miniBank2 = new MiniBank(1000);
miniBank2.printBalance();
miniBank2.deposit(100);
miniBank2.printBalance();
miniBank2.withdraw(40);
miniBank2.printBalance();
miniBank2.printStatement();
