// Q1

function userGen(n, m) {
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let upCase = [];
    alphabet.forEach(e => {
        upCase.push(e.toUpperCase());
    })
    let idArr = Array(n);
    let iddArr = Array(m);
    for (let i = 0; i <= m; i++) {
        iddArr[i - 1] = idArr.join("");
        for (let i = 0; i < n; i++) {
            let number = Math.floor(Math.random() * 10);
            let letter = alphabet[Math.floor(Math.random() * (alphabet.length))];
            let random = Math.floor(Math.random() * 100);
            let up = upCase[Math.floor(Math.random() * (upCase.length - 1))];
            if (random < 33) {
                idArr[i] = up;
            } else if (random < 66) {
                idArr[i] = number;
            } else if (random < 100) {
                idArr[i] = letter;
            };
        };


    };
    return iddArr.join(`
 `);
};

console.log(`"${userGen(5, 6)}"`);

//Q2

function rgbColor() {
    let rgbArr = Array(3);
    for (let i = 0; i < 3; i++) {
        rgbArr[i] = Math.floor(Math.random() * 256);
    }
    let rgbStr = rgbArr.join(", ");
    return `rgb(${rgbStr})`
}
console.log(rgbColor());

// Q3

function hexColor() {
    let hexArr = Array(7);
    let letter = ["a", "b", "c", "d", "e", "f",];


    for (let i = 0; i < 7; i++) {
        let number = Math.floor(Math.random() * 10);
        let random = Math.floor(Math.random() * 2);
        if (i == 0) {
            hexArr[i] = "#";
        } else if (random == 0) {
            hexArr[i] = letter[Math.floor(Math.random() * 6)];
        } else {
            hexArr[i] = number
        };
    };
    let hexStr = hexArr.join("");
    hexArr = hexStr.split();
    return hexStr;

};
console.log(hexColor());

// Q4

function rgb() {
    let rgbArr = Array(3);
    for (let i = 0; i < 3; i++) {
        rgbArr[i] = Math.floor(Math.random() * 256);
    }
    let rgbStr = `rgb(${rgbArr.join(", ")})`;
    rgbArr = rgbStr.split();
    return rgbArr;
}
console.log(rgb());

// Q5 and Q6 conver hexa to rgb and rgb to hexa


// Q7 

function userWant(code, number) {
    let newArr = Array(number);
    for (let i = 0; i < number; i++) {
        if (code == "hexa") {

            newArr[i] = hexColor();


        } else {
            newArr[i] = rgbColor();
        }
    }
    return newArr;
}
console.log(userWant("rgb", 5));

// Q8

function shuffle(arr) {
    let a = Array(arr.length);
    let na = [...arr]
    let l = na.length;
    for (let i = 0; i < l; i++) {
        d = Math.floor(Math.random() * l - i);
        b = arr.splice(d, 1);
        c = b.join("");
        a[i] = parseInt(c);
        console.log(i)
    }
    return a;


};
console.log(shuffle([1, 2, 3, 4, 5, 6]));


// Q9 Factorial

function factorial(n) {
    let fac = 1;
    for (let i = 1; i <= n; i++) {
        fac *= i;
    }
    return fac;
}
factorial(5);

// Q10 isEmpty

function isEmpty(parm) {
    if (parm == "") {
        return "It's empty";
    } else {
        return "It's not empty";
    }
};
isEmpty("asd")

//Q 11 sum arguments

function sum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    };
    return sum;
}

sum(1, 2, 3, 4);

//q 12 sum array responsible 

function sumArr(a) {
    let sum = 0;
    a.forEach(e => {
        if (typeof (e) == "number") {
            sum += e;
        } else {
            console.log("Array must be build by only number.")
        }
    })
    return sum;
}


sumArr([1, 2, 3]);
sumArr([1, 2, 3, "asd"]);

// Q13 avrage resp

function avrage(a) {
    let sum = 0;
    a.forEach(e => {
        if (typeof (e) == "number") {
            sum += e;
        } else {
            console.log("Array must be build by only number.")
        }
    })
    return sum / a.length;
}


avrage([1, 2, 3, "asd"]);
avrage([1, 2, 3]);

// Q14 fifth item

function fifth(arr) {
    if (arr.length > 4) {
        arr[4] = arr[4].toUpperCase();
        return arr;
    } else {
        console.log("Not found.")
    };


};

console.log(fifth(["cemil", "beyza", "memil", "flan", "filan", "yalan", "dolan"]));
console.log(fifth(["cemil", "beyza"]));

// Q15 isPrime

function prime(n) {

    if (n == 3) {
        return true;
    };

    for (let i = 3; i < n; i++) {
        if (n > 2 && n % i != 0) {
            return true;
        } else {
            return false;
        };
    };
};

console.log(prime(3));

// Q16 uniqe 

function uniq(a) {
    let ok = true;
    for (let i = 1; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (j != i) {
                if (a[i] == a[j]) {
                    ok = false;
                }
            }
        }
    }
    if (ok == true) {
        console.log("This array uniq");
    } else {
        console.log("This array not uniqe")
    }
};

console.log(uniq([1, 2, 3, 4]));
console.log(uniq([1, 2, 3, 4, 4]));

// Q17 same data type

function type(a) {
    let ok = true;
    for (let i = 0; i <= a.length; i++) {
        if (typeof (a[0]) == typeof (a[i])) {
            ok = false;
            console.log(i)
        }
    }
    if (ok == false) {
        console.log("This array same type");
    } else {
        console.log("This array not same typee")
    }
};

console.log(type([1, 2, 'cemil', 3, 4]));
console.log(type([1, 2, 3, 4]));

// Q18 variable

function isOkay(vr) {
    let yasak = ["#", "$"];
    let arr = vr.split("");
    let hata = 1;
    arr.forEach(e => {
        if (yasak.includes(e)) {
            hata = 0;
        }
    })

    if (hata == 1) {
        return `it's legal.`
    } else {
        return `it's ilegal***`
    }
}

console.log(isOkay("ANoooaaooAOOoa#"))

// Q19 seven number all of them uniqe


function uniqeSevenNumber() {
    let arr = Array(7);
    for (let i = 0; i < arr.length; i++) {
        let j = 0
        while (j < 10) {
            let randomNumber = Math.floor(Math.random() * 10);
            if (arr.includes(randomNumber) == false) {
                arr[i] = randomNumber;
                j = 11;
            } else {
                j = 0;
            }
        }
    };

    return arr;

}

uniqeSevenNumber();

// Q20

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
    'Roman Empire',
    "Chad"
]

function rvrs(){
    let copy = [...countries];
    copy.reverse()
    return copy;
}

rvrs()



