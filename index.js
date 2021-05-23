class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
   return this.radius * 2
 }

 set diameter(newDiameter) {
   this.radius = newDiameter / 2;
 }


 get circumference() {
  return this.sideLength * this.sideLength;
}

set area(newCircumference) {
  this.sideLength = Math.sqrt(newCircumference);
}


  get area() {
   return this.sideLength * this.sideLength;
 }

 set area(newArea) {
   this.sideLength = Math.sqrt(newArea);
 }

}
