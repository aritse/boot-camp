const Shape = require("./shape");

class Circle extends Shape {
  constructor(radius) {
    const area = Math.PI * radius * radius;
    const circumference = 2 * Math.PI * radius;

    super(area, circumference);
    this.radius = radius;
  }
}

const circle = new Circle(5);
circle.printInfo();
