// 6. Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.

class Employee{
  constructor(name,salary){
    this.name = name;
    this.salary = salary;
    console.log("name of manager :",this.name)
  }
  annual_salary(){
    return this.salary * 12 
  }
}
class Manager extends Employee{
  constructor(name,salary,department){
    super(name,salary)
    this.name = name;
    this.salary = salary;
    this.department = department;
  }
  annual_salary(){
    let base_salary = super.annual_salary()
    let bonus = 0.1
    console.log(`Bonus (10% of the base salary): ${bonus}`);
    return (bonus * base_salary) + base_salary
  }
}
let salary = new Manager("Felison",50000,"developer")
let annual_salary = salary.annual_salary()
console.log(annual_salary)

let salary2 = new Manager("basu",50000,"developer")
let annual_salary2 = salary2.annual_salary()
console.log(annual_salary2)