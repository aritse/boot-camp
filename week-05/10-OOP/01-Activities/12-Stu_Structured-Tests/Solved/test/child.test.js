const Child = require("../child");

describe("Child", () => {
  describe("Initialization", () => {
    // Positive test
    it("should create an object with name and age properties", () => {
      // Arrange
      const name = "Morgan";
      const age = 3;

      // Act
      const child = new Child(name, age);

      // Asert
      expect(child.name).toEqual(name);
      expect(child.age).toEqual(age);
    });
    // Exception test
    it("should throw an error if not provided a name", () => {
      // Arrange
      const cb = () => new Child();
      const err = new Error("Expected parameter 'name' to be a non-empty string");

      // Assert
      expect(cb).toThrowError(err);
    });
    it("should throw an error if not provided age", () => {
      // Arrange
      const cb = () => new Child("Morgan");
      const err = new Error("Expected parameter 'age' to be a non-negative number");

      // Assert
      expect(cb).toThrowError(err);
    });
    it("should throw an error if name is not a string", () => {
      // Arrange
      const cb = () => new Child(3, 3);
      const err = new Error("Expected parameter 'name' to be a non-empty string");

      // Assert
      expect(cb).toThrowError(err);
    });
    it("should throw an error if age is negative", () => {
      // Arrange
      const cb = () => new Child("Morgan", -3);
      const err = new Error("Expected parameter 'age' to be a non-negative number");

      // Assert
      expect(cb).toThrowError(err);
    });
    it("should throw an error if age is not a number", () => {
      // Arrange
      const cb = () => new Child("Morgan", "3");
      const err = new Error("Expected parameter 'age' to be a non-negative number");

      // Assert
      expect(cb).toThrowError(err);
    });
  });
});
