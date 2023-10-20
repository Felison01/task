// 5. Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.

class Shapes{
  calc_area(){
    console.log('hello');
  }
}
class Circle extends Shapes{
  constructor(radius){
    super()
    this.radius = radius
  }
  calc_area(){
    return Math.PI * this.radius * this.radius
  }
}
class Triangle extends Shapes{
  constructor(height,width){
    super()
    this.height = height
    this.width = width
  }
  calc_area(){
    return this.height * this.width
  }
}
const Circle_area = new Circle(7)
const a = Circle_area.calc_area()
console.log(a)

const Triangle_area = new Triangle(25,10)
const b = Triangle_area.calc_area()
console.log(b)