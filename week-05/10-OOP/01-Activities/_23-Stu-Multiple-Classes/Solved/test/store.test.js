const Store = require("../store");

describe("Store class", () => {
  describe("processProductSale method", () => {
    it("decrements count", () => {
<<<<<<< HEAD
      const store = new Store("Big Al's Toy Barn", [{ name: "Action Figure", price: 5.0, count: 1 }]);
=======
      const store = new Store("Big Al's Toy Barn", [
        { name: "Action Figure", price: 5.0, count: 1 }
      ]);
>>>>>>> upstream/master
      store.processProductSale("Action Figure");
      expect(store.stock[0].count).toBe(0);
    });

    it("increases revenue", () => {
<<<<<<< HEAD
      const store = new Store("Big Al's Toy Barn", [{ name: "Action Figure", price: 5.0, count: 2 }]);
=======
      const store = new Store("Big Al's Toy Barn", [
        { name: "Action Figure", price: 5.0, count: 2 }
      ]);
>>>>>>> upstream/master
      store.processProductSale("Action Figure");
      store.processProductSale("Action Figure");
      expect(store.revenue).toBe(10);
    });
  });

  describe("replenishStock method", () => {
    it("increases count", () => {
<<<<<<< HEAD
      const store = new Store("Big Al's Toy Barn", [{ name: "Action Figure", price: 5.0, count: 1 }]);
=======
      const store = new Store("Big Al's Toy Barn", [
        { name: "Action Figure", price: 5.0, count: 1 }
      ]);
>>>>>>> upstream/master
      store.replenishStock("Action Figure", 2);
      expect(store.stock[0].count).toBe(3);
    });
  });
});
