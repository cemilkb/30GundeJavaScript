/*
todo: (Create animal class)*/

class Animal {
  constructor(name, age, color, legs, breed) {
    this.name = name,
      this.age = age,
      this.color = color,
      this.legs = legs
  }
  info() {
    return `${this.name} is ${this.age} years old it is ${this.color} and have ${this.legs} legs. `
  }
}


class Dog extends Animal{
  speak() {
    console.log(`${this.name} barks.`);
  }
}


class Cat extends Animal{
  speak() {
    console.log(`${this.name} meow.`);
  }
}


let dog = new Dog("dobie",8,"black",4)
let cat = new Cat("Jessie",8,"black",4)

console.log(dog.speak())
console.log(cat.speak())