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
  return this.radius * 2 * Math.PI;
}

set area(newCircumference) {
  return this.radius = newCircumference / (2 * Math.PI);
}


  get area() {
   this.radius = newCircumference/ (2 * Math.PI);
 }

 set area(newArea) {
   this.radius = Math.sqrt(newArea) / Math.PI;
 }

}
