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
  return this.diameter * MATH.PI;
}

set area(newCircumference) {
  this.diameter = newCircumference / MATH.PI;
}


  get area() {
   return this.radius * this.radius * MATH.PI;
 }

 set area(newArea) {
   this.radius = Math.sqrt(newArea) / MATH.PI;
 }

}
