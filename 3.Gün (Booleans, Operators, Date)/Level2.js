// Question 1

let takeBase = prompt("What base is triangel ?", "Enter base");
let takeHeight = prompt("What height is triangel ?", "Enter height");
const area = takeBase * takeHeight * 0.5;
console.log(`The area of trianfel is : ${area}`);

// Question 2
let a = parseInt(prompt("Write sida a of triangel"));
let b = parseInt(prompt("Write side b of triangel"));
let c = parseInt(prompt("Write side c of triangel"));
const perimeter = a + b + c;
console.log(`A perimeter of triangel : ${perimeter}`);

// Question 3
let length = parseInt(prompt("Choose your reactangel lenght."));
let width = parseInt(prompt("Give width a rectangel"));
const perimeterRectangel = 2 * (length + width);
const rectangelArea = length * width;
console.log(`Rectangel area equal to : ${rectangelArea} and rectanegl perimeter equal to : ${perimeterRectangel}`);

// Question 4
let r = parseInt(prompt("What you want a radius for circle."));
let pi = Math.PI;
const circumference = 2 * pi * r;
const circleArea = pi * r ** 2;
console.log(`Circle area is : ${circleArea} circle circumference is : ${circumference} `);

// Question 5
let x = parseInt(prompt("Assign a value to X"));
const y = 2 * x - 2;
console.log(`Slope value = ${y}`);

// Question 6
let x1 = parseInt(prompt("X1 value"));
let y1 = parseInt(prompt("Y1 value"));
let x2 = parseInt(prompt("X2 value"));
let y2 = parseInt(prompt("Y2 value"));
const slope = (y2 - y1) / (x2 - x1)
console.log(`Slope between (2,2) and (6,10) = ${slope}`);

// Question 7
let ax = parseInt(prompt("Assign a value to X"));
const ay = 2 * x - 2;

let ax1 = parseInt(prompt("X1 value"));
let ay1 = parseInt(prompt("Y1 value"));
let ax2 = parseInt(prompt("X2 value"));
let ay2 = parseInt(prompt("Y2 value"));
const aslope = (ay2 - ay1) / (ax2 - ax1)

const compare = ay < aslope;
console.log(`y<slope : ${compare}`);

// Question 8
let newx = -3;
let newy = newx ** 2 + 6 * newx + 9;

console.log(newy);

// Question 9
let hours = parseInt(prompt("Enter Hours :"));
let rate = parseInt(prompt("Enter rate per hour :"));
const pop = hours * rate;
console.log(pop);

// Question 10
let prommptName = prompt("Your name :");
const say = prommptName.length > 7 ? "your name is long" : "your name is short";
console.log(say);

// Question 11
let firstName = "cemil";
let lastName = "köybaşı";
const comparee = firstName.length > lastName.length ? `Your first name, ${firstName} is longer than your family name, ${lastName}`
    : `Your first name, ${firstName} is shorter than your family name, ${lastName}`;
console.log(comparee);

// Question 12
let myAge = 123 ;
let yourAge = 12;
let old = myAge - yourAge ;
const diff = `I am ${old} years older than you.`
console.log(diff);

// Question 13
let yearPrompt = parseInt(prompt("Enter birth year."));
let yearOld = 2023 - yearPrompt ;
let after  = 18-yearOld;
const canOrNot= yearOld > 18 ? `You are ${yearOld}. You are old enough to drive` : 
`You are ${yearOld}. You will be allowed to drive after ${after} years.`;
console.log(canOrNot);

// Question 14
let numberOfYear = parseInt(prompt("How much Year Old :"));
let livedSecond = numberOfYear * 3153600 ;
let lived = `You lived ${livedSecond} seconds.`
console.log(lived);

// Question 15
let date = new Date;
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();
let hour = date.getHours();
let minute = date.getMinutes();
let one =`${year}-${month}-${day}  ${hour}:${minute}`;
let two = `${day}-${month}-${year}  ${hour}:${minute}`;
let three = `${day}/${month}/${year} ${hour}:${minute}`;
const all = `${one}
${two}
${three}`

console.log(all);




