class Store {
  constructor(name, stock, revenue = 0) {
    this.name = name;
    this.stock = stock;
    this.revenue = revenue;
  }

  printRevenue() {
    console.log(`The revenue so far is ${this.revenue}`);
  }

  welcome() {
    console.log(`Welcome to ${this.name}!`);
  }

  getToy(name) {
    for (let i = 0; i < this.stock.length; i++) {
      const toy = this.stock[i];
      if (toy.name === name) return toy;
    }
    return null;
  }

  processProductSale(name) {
    const toy = this.getToy(name);
    if (toy === null) throw new Error("Unknown toy", name);
    if (toy.count > 0) {
      toy.count--;
      this.revenue += toy.price;
    } else {
      console.log(name, "sold out");
    }
  }

  replenishStock(name, count) {
    const toy = this.getToy(name);
    if (toy === null) throw new Error("Unknown toy", name);
    toy.count += count;
  }
}

module.exports = Store;
