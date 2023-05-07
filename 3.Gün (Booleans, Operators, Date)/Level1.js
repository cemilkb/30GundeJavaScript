// Question 1

let firstName = "Cemil", lastName = "Köybaşı", country = "Türkiye", city = "İstanbul", age = 25, isMarried = true, year = 2023;

// Question 2

const strTen = "10";
const ten = 10;
const equal = typeof (ten) == typeof (strTen);

// Question 3

const float = parseInt('9.8');
const isFloatEqual = typeof (float) == typeof (ten)

// Question 4

// TRUTHY
const truthOne = 3 == 3, truthTwo = "Selam!" == "Selam!", truthThree = 14 == 10 + 4;
// FALSY
const falseOne = 3 == 5, falseTwo = "Elma" == "Armut", falseThree = 8 == 2 ** 4;

// Question 5

let a = 4 > 3, // true 
    b = 4 >= 3, // true
    c = 4 < 3, //false 
    d = 4 <= 3, //false
    e = 4 == 4, //true
    f = 4 === 4, //true
    g = 4 != 4, //false
    h = 4 !== 4, //false
    ı = 4 != '4', //false
    j = 4 == '4', //true
    k = 4 === '4'; //false
// python and jargon

let pyt = "python";
let jrg = "jargon";
const lenghtPyt = pyt.length;
const lenghtJrg = jrg.length;
const falsyComp = lenghtJrg !== lenghtPyt ;



// Question 6

4 > 3 && 10 < 12 // true
4 > 3 && 10 > 12 // false
4 > 3 || 10 < 12 //true
4 > 3 || 10 > 12 //true
!(4 > 3) //false
!(4 < 3) //true
!(false) //true
!(4 > 3 && 10 < 12) //false
!(4 > 3 && 10 > 12) // true
!(4 === '4') //true
//There is no 'on' in both dragon and python //flase
let abc = "python";
let cba = "dragon";
let incAbc = abc.includes("on") ;
let incCba = cba.includes("on");
const on = incCba || incAbc ;
console.log(on) ;
// Question 7
let date = new Date;
let years = date.getFullYear();
let month = date.getMonth();
let toDay = date.getDate();
let day = date.getDay();
let hours = date.getHours();
let minutes = date.getMinutes();
let daten = Date.now();
let alla = `i-) ${years}
ii-) ${month}
iii-) ${toDay}
iv-)${day}
v-) ${hours}
vi-)${minutes}
vii-)${daten}`;
console.log(alla);







// Output

console.log(typeof (firstName));
console.log(typeof (lastName));
console.log(typeof (country));
console.log(typeof (city));
console.log(typeof (age));
console.log(typeof (isMarried));
console.log(typeof (year));
console.log(equal);
console.log(`All 3 true statement ${truthOne}, ${truthTwo}, ${truthThree}`);
console.log(`All 3 false statement ${falseOne}, ${falseTwo},${falseThree}`);
console.log(falsyComp);