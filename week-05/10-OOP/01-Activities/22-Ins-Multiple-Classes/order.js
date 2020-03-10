class Order {
  constructor(item) {
    this.item = item;

    Order.lastId++;
    this.id = Order.lastId;
  }
}

// create a static variable that is referenced by
// the name of a class instead of an object instance
Order.lastId = 0;

module.exports = Order;
