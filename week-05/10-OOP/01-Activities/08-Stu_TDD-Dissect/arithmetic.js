function Arithmetic(number = 0) {
  this.number = number;
}

Arithmetic.prototype.plus = function(num = 0) {
  return new Arithmetic(this.number + num);
};

Arithmetic.prototype.minus = function(num = 0) {
  return new Arithmetic(this.number - num);
};

Arithmetic.prototype.value = function() {
  return this.number;
};

module.exports = Arithmetic;
