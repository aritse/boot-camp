function Algo() {}

Algo.prototype.reverse = function(str) {
  return str
    .split("")
    .reverse()
    .join("");
};

Algo.prototype.isPalindrome = function(str) {
  str = str.toLowerCase();
  return str === this.reverse(str);
};

Algo.prototype.capitalize = function(str) {
  return str
    .split(" ")
    .map(s => s[0].toUpperCase() + s.slice(1))
    .join(" ");
};

module.exports = Algo;
