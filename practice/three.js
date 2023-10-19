// 3. Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.


class Vehicle {
  constructor(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;
  }
  Vehicle_details(){
    console.log(`make:${this.make}`)
    console.log(`modal:${this.model}`)
    console.log(`year:${this.year}`)
  }
}
class Car extends Vehicle {
  constructor(make,model,year,doors){
    super(make,model,year)
    this.doors = doors
  }
  Vehicle_details(){
    super.Vehicle_details();
    console.log(`door:${this.door}`)
  }
}
 let a1 = new Vehicle("Ford", "g3" , 2023)
 a1.Vehicle_details()

let a2 = new Car ("Toyota",'innova',2020, 4);
a2.Vehicle_details()