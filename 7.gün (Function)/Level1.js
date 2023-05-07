/* Q1 
todo: (FullName function) */

let name = prompt("Enter Your Name :"),
    surName = prompt("Enter  your Surname :");
function fullNameAuto(a, b) {
    let fullName = `${a} ${b}`;
    console.log(fullName)
};
fullNameAuto(name, surName);

/* Q2
todo: (Fullname function with return) */

function fullName(a, b) {
    let fullName = `${a} ${b}...`;
    return fullName;
}

console.log(fullName(name, surName));

/* Q3
todo: () */

let num1 = parseInt(prompt("Number-1:")),
    num2 = parseInt(prompt("Number-2:")),
    write = sumFunction(num1, num2);
function sumFunction(a, b) {
    let sum = a + b;
    return sum;
};
console.log(write);

/* Q4
todo: (Area of rectangel) */

let lenght = parseInt(prompt("What is lenght of rectangel : ")),
    width = parseInt(prompt("What is width of rectangel : "));

function areaOfRectangel(lenght, width) {
    let area = lenght * width;
    return area;
}
console.log(areaOfRectangel(lenght, width) + " Area");

/* Q5
todo: (Perimeter of rectaangel) */

function perimeterOfRectangel(lenght, width) {
    let perimeter = (lenght + width) * 2;
    return perimeter;
}
console.log(perimeterOfRectangel(lenght, width) + " Perimeter");

/* Q6
todo: (Volume of rectangular prism) */

let lPrsm = parseInt(prompt("Prism lenght")),
    wPrsm = parseInt(prompt("Prsim width")),
    hPrsm = parseInt(prompt("Prsim height"));

function volumeRectangularPrism(lenght, width, height) {
    let volume = lenght * width * height;
    return volume;
}

console.log(volumeRectangularPrism(lPrsm, wPrsm, hPrsm) + " = Volme");

/* Q7
todo: (Area of circle) */

let radius = parseInt(prompt("Radius of circle "));
function areaOfCircle(r) {
    let pi = Math.PI,
        area = pi * (r ** 2);
    return area;
}

console.log(areaOfCircle(radius) + " = Area of circle");

/* Q8
todo: (Circle Circumference calculation ) */
function circumferenceOfCircle(r) {
    let pi = Math.PI,
        circumference = 2 * pi * r;
    return circumference;
}

console.log(circumferenceOfCircle(radius) + " = Circumference of circle");

/* Q9
todo: (Density calculation) */

let mass = parseInt(prompt("mass : ")),
    volume = parseInt(prompt("Volume : "));

function denstiy(m, v) {
    let denstiy = m / v;
    return denstiy;
};

console.log(denstiy(mass, volume) + " = Denstiy");

/* Q10
todo: (Calculate a Speed) */

let totalAmount = parseInt(prompt("Total Amount")),
    timeTaken = parseInt(prompt("Time taken"));

function speed(tAmaount, tTime) {
    let speed = tAmaount / tTime;
    return speed;
}

console.log(speed(totalAmount, timeTaken) + " = Speed");

/* Q11
todo: (weight calculation) */

let mass = parseInt(prompt("mas"));
let gravity = parseInt(prompt("gravity "));

function weight(mass, gravity) {
    let weight = mass * gravity;
    return weight;
};

console.log(weight(mass, gravity) + " = Weight");

/* Q12
todo: (conversion celcius to fahrenheit) */

let celcius = parseInt(prompt("Tempurature"));

function cToF(temp) {
    let fah = (temp * (9 / 5)) + 32;
    return fah;
}

console.log(cToF(celcius) + " = Fahrenheit")

/* Q13
todo: (BMI calculation) */

let hght = parseInt(prompt("Height in cm :")),
    wght = parseInt(prompt("Weight "));

function bmi(h, w) {
    let bmi = w / h ** 2;
    if (bmi < 18.5) {
        return `Your bmi is equal to = ${bmi}. You'r Underweight`;
    } else if (bmi < 25) {
        return `Your bmi is equal to = ${bmi}. You'r Normalweight`;
    } else if (bmi < 30) {
        return `Your bmi is equal to = ${bmi}. You'r Overweight`;
    } else {
        return `Your bmi is equal to = ${bmi}. You'r Obese`;
    }
}

console.log(bmi(hght, wght));

/* Q14
todo: (Season check) */

let winter = ["January", "February", "December"],
    spring = ["March", "April", "May"],
    summer = ["June", "July", "August"],
    autumn = ["September", "October", "November"],
    users = prompt("Pick a month");

function seasonCheck(month) {
    if (winter.includes(month)) {
        return "Season:Winter";
    } else if (spring.includes(month)) {
        return "Season:Spring";
    } else if (summer.includes(month)) {
        return "Season:Summer";
    } else if (autumn.includes(month)) {
        return "Season:Autumn";
    };
}

console.log(seasonCheck(users));

/* Q15
todo: (Find max) */

function findMax() {
    let max = 1;

    let aa = [...arguments];
    let bb = aa.sort((a, b) => a - b);
    
    
    
    return bb[aa.length - 1];
}

console.log(findMax(-1, -2, 100, -3, -123));





