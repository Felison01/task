// Write a JavaScript program that creates a class called 'Animal' with properties for species and sound. Include a method to make the animal's sound. Create a subclass called 'Dog' that inherits from the 'Animal' class and adds an additional property for color. Override the make sound method to include the dog's color. Create an instance of the 'Dog' class and make it make its sound.

class Animal{
  constructor(species,sound){
    this.species = species;
    this.sound = sound;
  }
  makes_sound(){
    console.log(`${this.species} makes ${this.sound}`)
  }
}
class Dog extends Animal{
  constructor(species,sound,color){;
  super(species,sound)
  this.color = color;
  }
  makes_sound(){
    super.makes_sound()
    console.log("the dog is ",this.color);
  }
}
let animal = new Dog("Dog","wooof woof","brown")
console.log(animal);

animal.makes_sound()

let animal1 = new Animal('dog','bark')
animal1.makes_sound()