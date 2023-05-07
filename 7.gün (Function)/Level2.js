/* Q1 
todo: (linear equation ax + bx + c = 0) */

function linear(a, b, c) {
    let x = `(${a}*"x")/${b} = -(${c / b})-"y" `

    return x

};

console.log(linear(1, 2, 5));

/* Q2
todo: (ax2 +bx + c = 0) */

function linear(a, b, c) {
    let x = (-b + Math.sqrt(b ** 2 - (4 * a * c))) / (2 * a);
    let y = (-b - Math.sqrt(b ** 2 - (4 * a * c))) / (2 * a);

    return `${x} and ${y}`

};

console.log(linear(1, -1, -2));

/* Q3
todo: () */

function arr() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    };
};

arr(1, 2, 3, 4, 5, 6, 7)

/* Q4
todo: (date) */

function date() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let hours = date.getHours();
    let munite = date.getMinutes();
    let full = `${day}/${month}/${year} ${hours}:${munite}`

    console.log(full);
}
console.log(date());

/* Q5
todo: (Swap value) */

function swap(a, b) {
    let y = a;
    let x = b;
    return `x = ${x}, y = ${y}`;
}
console.log(swap(4, 5));

/* Q6
todo: (reverse array function) */


function reverse(arr) {
    let a = []
    for (let i = 0; i < arr.length; i++) {
        a.unshift(arr[i])
    }

    return a;

};

reverse([1, 2, 30]);

/* Q7
todo: (Capitalize array) */


function cptlz(arr) {
    for (let i = 0; i < arr.length; i++) {
        let a = arr[i].slice(0, 1).toUpperCase(),
            b = arr[i].slice(1),
            c = a + b;
        arr[i] = c;
    }
    return arr;
}

cptlz(["cemil", "beyza", "falan"]);

/* Q8
todo: (Add itemn ) */

let array = [1, 2, 3, 4];
function add(arr, add) {
    arr.push(add);
    return arr;
}

add(array, 9);

/* Q9
todo: (Remove item) */

function remove(arr, i) {
    arr.splice(i, 1);
    return arr;
}

remove(array, 1);

/* Q10
todo: (all sum) */

function sum(n) {
    let a = 0;
    for (let i = 0; i <= n; i++) {
        a += i;
    }
    return a;
}

sum(5)

/* Q11
todo: (odd range) */

function sum(n) {
    let a = 0;
    for (let i = 0; i <= n; i++) {
        if (i % 2 != 0) {
            a += i;
        }
    }
    return a;
}

sum(5)

/* Q12
todo: (even sum) */

function sum(n) {
    let a = 0;
    for (let i = 0; i <= n; i++) {
        if (i % 2 == 0) {
            a += i;
        }
    }
    return a;
}

sum(5)

/* Q13
todo: (even odd counter) */

let eCounter = 0;
let oCounter = 0;

function counter(n) {
    for (let i = 0; i <= n; i++) {
        if (i % 2 == 0) {
            eCounter++
        } else {
            oCounter++
        }
    }
    return `The number of odds are ${oCounter}
The number of evens are ${eCounter}   `
};

console.log(counter(100));

/* Q14
todo: (sum arguments) */

function arrSum() {
    let sum = 0;
    let a = [...arguments]
    a.forEach(e => {
        sum += e
    });
    return sum;
};

arrSum(1, 2, 3, 4)

/* Q15
todo: (RANDOM USER İP) */

function userIp(n) {
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let idArr = Array(n);
    for (let i = 0; i < n; i++) {
        let number = Math.floor(Math.random() * 10);
        let letter = alphabet[Math.floor(Math.random() * (alphabet.length))];
        let random = Math.floor(Math.random() * 2);
        if (random == 0) {
            idArr[i] = letter;
        } else {
            idArr[i] = number;
        }
    }
    let id = idArr.join("");
    return id;
}
userIp(5);

/* Q16
todo: (macadress) */
function macAdress(n) {
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let idArr = Array(n);
    for (let i = 0; i < n; i++) {
        let number = Math.floor(Math.random() * 10);
        let letter = alphabet[Math.floor(Math.random() * (alphabet.length))];
        let random = Math.floor(Math.random() * 2);
        if ((i - 2) % 3 == 0 && i > 0) {
            idArr[i] = "-";
        } else if (random == 0) {
            idArr[i] = number;
        } else {
            idArr[i] = letter;
        }
    }
    let id = idArr.join("");
    return id;
}
macAdress(17);

/* Q17
todo: (Find max) */


function hexaNumber(n) {
    let alphabet = ["a", "b", "c", "d", "e", "f"];
    let idArr = Array(n);
    for (let i = 0; i < n; i++) {
        let number = Math.floor(Math.random() * 10);
        let letter = alphabet[Math.floor(Math.random() * (alphabet.length))];
        let random = Math.floor(Math.random() * 2);
        if (i == 0) {
            idArr[i] = "#";
        } else if (random == 0) {
            idArr[i] = number;
        } else {
            idArr[i] = letter;
        }
    }
    let id = idArr.join("");
    return id;
}
hexaNumber(7);

/* Q18
todo: (Find max) */

let uPercentage = parseInt(prompt("Up case percentage"));
let nPercentage = parseInt(prompt("Number percentage"));
let lPercentage = parseInt(prompt("Letter percentage"));
let user = parseInt(prompt("How much charecter you want ?"));




function macAdress(n) {
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let upCase = [];
    alphabet.forEach(e => {
        upCase.push(e.toUpperCase());
    })
    let idArr = Array(n);
    for (let i = 0; i < n; i++) {
        let number = Math.floor(Math.random() * 10);
        let letter = alphabet[Math.floor(Math.random() * (alphabet.length))];
        let random = Math.floor(Math.random() * 100);
        let up = upCase[Math.floor(Math.random()*(upCase.length-1))];
        if (random < uPercentage ) {
            idArr[i] = up;
        } else if (random < nPercentage+uPercentage) {
            idArr[i] = number;
        } else if(random < lPercentage+uPercentage+nPercentage) {
            idArr[i] = letter;
        }
    }
    let id = idArr.join("");
    return id;
}
macAdress(user);







