const Algo = require("../algo");
const algo = new Algo();

describe("Algo", () => {
  describe("reverse", () => {
    it("reverses a string", () => {
      const s = "Hello";
      expect(algo.reverse(s)).toBe("olleH");
    });
  });

  describe("isPalindrome", () => {
    it("returns true when a string is palindrome", () => {
      const s = "abcba";
      expect(algo.isPalindrome(s)).toBe(true);
    });
    it("returns false when a string is NOT palindrome", () => {
      const s = "abcxyz";
      expect(algo.isPalindrome(s)).toBe(false);
    });
    it("returns true when a string is palindrome, but difference casing", () => {
      const s = "Eye";
      expect(algo.isPalindrome(s)).toBe(true);
    });
  });

  describe("capitalize", () => {
    it("returns a capitalized string", () => {
      const s = "heLLo";
      expect(algo.capitalize(s)).toBe("HELLO");
    });
  });
});
