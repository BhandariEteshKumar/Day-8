class Circle {
  //   constructor(radius, color) {
  //     this.radius = radius;
  //     this.color = color;
  //   }
  Circle() {}
  Circle(radius) {
    this.radius = radius;
  }
  Circle(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  getRadius() {
    return this.radius;
  }
  setRadius(radius) {
    this.radius = radius;
  }
  getColor() {
    return this.color;
  }
  setColor(color) {
    this.color = color;
  }
  toString() {
    Circle.toString();
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}
let circle = new Circle();
circle.Circle(1.0, "red");
console.log(circle.getRadius());
console.log(circle.getColor());
console.log(circle.toString());
console.log(circle.getArea());
console.log(circle.getCircumference());
let circle2 = new Circle();
circle2.radius = 2;
console.log(circle2.getRadius());
