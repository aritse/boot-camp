const DayCare = require("../dayCare");
const Child = require("../child");

describe("DayCare", () => {
  describe("Initialization", () => {
    // Positve test
    it("should create an object with children property set to an empty array when called with the new keyword", () => {
      // Arrange
      const dayCare = new DayCare();

      // Assert
      expect(dayCare).toEqual({ children: [], capacity: 3, ageLimit: 6 });
    });
  });
  describe("addChild", () => {
    // Positive tests
    it("should add a new child to its children array", () => {
      // Arrange
      const dayCare = new DayCare();
      const name = "Morgan";
      const age = 4;
      const child = new Child(name, age);

      // Act
      dayCare.addChild(child);

      // Assert
      expect(dayCare.children.length).toEqual(1);
      expect(dayCare.children[0]).toBe(child);
    });

    // Exception test
    it("should throw an error if not provided child", () => {
      // Arrange
      const dayCare = new DayCare();
      const err = new Error("Expected parameter 'child' to be an instance of Child");
      const cb = () => dayCare.addChild();

      // Assert
      expect(cb).toThrowError(err);
    });

    // Negative tests
    it("should not add a new child to its children array if over age limit", () => {
      // Arrange
      const dayCare = new DayCare();
      const name = "Morgan";
      const age = 9;
      const child = new Child(name, age);

      // Act
      dayCare.addChild(child);

      // Assert
      expect(dayCare.children.length).toEqual(0);
    });
    it("should not add a new child to its children array if capacity reached", () => {
      // Arrange
      const dayCare = new DayCare();
      dayCare.addChild(new Child("A", 3));
      dayCare.addChild(new Child("B", 3));
      dayCare.addChild(new Child("C", 3));

      // Act
      dayCare.addChild(new Child("D", 3));

      // Assert
      expect(dayCare.children.length).toEqual(dayCare.capacity);
    });
  });
  describe("pickupChild", () => {
    // Positve tests
    it("should return a child", () => {
      // Arrange
      const dayCare = new DayCare();
      const childA = new Child("A", 3);
      const childB = new Child("B", 3);
      let pickedupChild;

      // Act
      dayCare.addChild(childA);
      dayCare.addChild(childB);
      pickedupChild = dayCare.pickupChild("A");

      // Assert
      expect(pickedupChild).toEqual(childA);
      expect(dayCare.children.length).toEqual(1);
      expect(dayCare.children.some(child => child.name === childA.name)).toEqual(false);
    });

    // Negative tests
    it("should return undefined if there is no child with that name", () => {
      // Arrange
      const dayCare = new DayCare();
      const childA = new Child("A", 3);
      let pickedupChild;

      // Act
      dayCare.addChild(childA);
      pickedupChild = dayCare.pickupChild("C");

      // Assert
      expect(typeof pickedupChild).toEqual("undefined");
    });
  });
});
