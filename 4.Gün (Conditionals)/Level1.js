// Question one 
let userAge = prompt("Enter your age.");
if (userAge >= 18) {
    console.log("You are old enough to drive.");
} else {
    console.log(`You are left with ${18 - userAge} years to drive.`); // Backticks using example 
};

// Question two
const myAge = 25;
let yourAge = parseInt(prompt("Enter your age:"));
let olderThan = Math.abs(myAge - yourAge);
if (myAge < yourAge) {
    console.log(`You are ${olderThan} years older than me.`);
} else if (myAge > yourAge) {
    console.log(`I am ${olderThan} years older than you.`);
} else if (myAge == yourAge) {
    console.log("We are same.");
};

// Question three
// if else
let a = 4;
let b = 3;
if (a > b) {
    console.log(`${a} is grater than ${b}.`);
} else {
    console.log(`${b} is grater than ${a}.`);
};
// ternary op
a > b ? console.log(`${a} is grater than ${b}.`) : console.log(`${b} is grater than ${a}.`);

// Question four
let number = parseInt(prompt("Enter a number"));
if (number % 2 == 1) {
    console.log(`${number} is an odd number`);
} else {
    console.log(`${number} is an even number`);
};


