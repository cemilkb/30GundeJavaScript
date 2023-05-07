/* Q1
todo: ( Empty Dog object ) */

let dog = {};

/* Q2
todo: ( Prtint dog object console ) */

console.log(dog);

/* Q3
todo: ( Add name, legs, color, age anb bark) */

dog.name = "Dobie",
    dog.legs = 4,
    dog.color = "Black",
    dog.age = 2,
    dog.bark = function () {
        return "woof woof";
    };

console.log(dog);

/* Q4
todo: ( Get all values from dog ) */

console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
dog.bark();

/* Q5
todo: ( Empty Dog object ) */

dog.breed = "Doberman";
dog.getInfo = function () {
    return `${this.name} is ${this.color + " " + this.breed}.And it is ${this.age} years old:`;
};

dog.getInfo()







