const FileIO = require("../fileIO");
const fs = require("fs");

jest.mock("fs"); // jest is mocking the file system (FS) module

describe("FileIO", () => {
  describe("read", () => {
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      // Arrange
      fs.readFileSync.mockReturnValue("Hello");
      const fileIO = new FileIO();
      const file = "messages.txt";

      // Act
      const message = fileIO.read(file);

      // Assert
      expect(message).toEqual("Hello");
      expect(fs.readFileSync).lastCalledWith(file, "utf8");
    });
  });

  describe("write", () => {
    it("should call fs.writeFileSync with the passed in 'file' and 'message' arguments", () => {
      // Arrange
      const fileIO = new FileIO();
      const file = "messages.txt";
      const message = "Hey";

      // Act
      fileIO.write(file, message);

      // Assert
      expect(fs.writeFileSync).lastCalledWith(file, message);
    });
  });

  describe("append", () => {
    it("should call fs.appendFileSync with the passed in 'file' and 'message' arguments", () => {
      // Arrange
      const fileIO = new FileIO();
      const file = "messages.txt";
      const message = "What's up";

      // Act
      fileIO.append(file, message);

      // Assert
      expect(fs.appendFileSync).lastCalledWith(file, message);
    });
  });
});
