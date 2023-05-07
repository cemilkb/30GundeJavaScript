/* Question 1 
TODO : (0 to 10 with for - while - do while) */
for (let i = 0; i < 11; i++) {
    console.log(i);
};

let i = 0;
while (i <= 10) {
    console.log(i);
    i++
};

do {
    console.log(i);
    i++
}
while (i < 10);
/* Question 2 
TODO : (10 to 0 with for - while - do while) */
for (let i = 10; i > -1; i--) {
    console.log(i);
};

let ii = 10;
while (ii != -1) {
    console.log(ii);
    ii--
};

do {
    console.log(ii);
    ii--
} while (i >= 0)


/* Question 3 
TODO : (0 to n with what any loop) */

let n = parseInt(prompt("Enter a random number"));
for (let i = 0; i <= n; i++) {
    console.log(i);
}

/* Question 4 
TODO : (write a loop) */
let aposrof = "";
for (let i = 0; i < 7; i++) {
    aposrof += "#";
    console.log(aposrof);

};
/* Question 5 
TODO : (i multiple i) */

for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`)
}

/* Question 6 
TODO : (i square i cube) */

console.log("i  i^2  i^3");
for (let i = 0; i < 11; i++) {
    let a = i ** 2
    let b = i ** 3
    console.log(`${i}   ${a}    ${b}`)
};

/* Question 7 
TODO : (0 to 100 even number ) */

for (let i = 0; i < 101; i++) {
    if (i % 2 == 0) {
        console.log(i);
    };
};

/* Question 8 
TODO : (0 to 100 odd number ) */

for (let i = 0; i < 101; i++) {
    if (i % 2 == 0) {
        continue
    } else {
        console.log(i);
    };
};

/* Question 9 
TODO : (0 to 100 only prime numbers) */

for (let i = 0; i < 101; i++) {
    let b = i;
    let ok = true;
    for (let i = 2; i < b; i++) {
        if (b % i == 0) {
            ok = false;
        };
    };

    if (ok && b > 1) {
        console.log(b);
    };
};

/* Question 10 
TODO : (0 to 100 summ of all) */

let b = 0;
for (let i = 0; i < 101; i++) {
    console.log(i);
    b += i;
    if (i == 100) {
        console.log(b)
    }
};

/* Question 11
TODO : (0 to 100 summ of odd and evens) */

let aEven = 0,
    bOdd = 0;
for (let i = 0; i < 101; i++) {
    if (i % 2 == 0) {
        aEven += i;
    } else {
        bOdd += i;
    };
};
console.log(`${bOdd} bu tek`);
console.log(`${aEven} bu çift`);

/* Question 12
TODO : (0 to 100 summ of add and evens in array) */

let emptyArr = Array(2), 
    even = 0,
    odd = 0;
for (let i = 0; i < 101; i++) {
    if (i % 2 != 0) {
        even += i;
    } else {
        odd += i;
    }
}
emptyArr[0] = odd;
emptyArr[1] = even;
console.log(emptyArr);


/* Question 13
TODO : (Generate array 5 random numbers) */
let randomArr = Array(5);
for (let i = 0; i < 5; i++) {
    let b = Math.floor(Math.random() * 10);
    randomArr[i] = b;
}
console.log(randomArr);

/* Question 14
TODO : (Generate array with 5 random uniqe number */

let fiveArray = Array(5);
let getArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let l = getArray.lenght;

for (let i = 0; i < 6; i++) {
    let a = Math.floor(Math.random() * (10 - i));
    console.log(a);
    let b = getArray[a];
     getArray.splice(a,1);
    fiveArray[i] = b;
};
console.log(fiveArray);

/* Question 15
TODO : (0 to 1o with for - while - do while) */


let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let password =  Array(6);
for (let i = 0; i<6; i++){
let alp = alphabet[Math.floor(Math.random()*(alphabet.length-1))];
let rndNumber = Math.floor(Math.random()*10);
let choicePercentage = Math.floor(Math.random()*100); // it is %50 percentage you can change anything u want with change if condition to
if (choicePercentage  < 50){ // u must change for percentage here to
    password[i] = alp;
}else if (choicePercentage < 100 ){
    password[i] = rndNumber;
    
}
}
let passwordString = password.join("");
console.log(passwordString);