/* Question 1
TODO: (Generate random id) */

let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let lnght = Math.floor(Math.random() * 10) + 5;
let idArray = Array(lnght);
for (let i = 0; i < lnght; i++) {
    let rndAlphabet = alphabet[Math.floor(Math.random() * alphabet.length)],
        rndNumber = Math.floor(Math.random() * 11),
        choice = Math.floor(Math.random() * 4);
    if (choice != 0) {
        idArray[i] = rndAlphabet;
    } else {
        idArray[i] = rndNumber;
    };
}

let id = idArray.join("");
console.log(id);

/* Question 2
TODO: Hexa decimal numbers */

let hexAlp = ["a", "b", "c", "d", "e", "f"];
let lnghtt = Math.floor(Math.random() * 3) + 3;
let hexArr = Array(lnghtt);
for (i = 0; i < lnghtt; i++) {
    let rndNumber = Math.floor(Math.random() * 11);
    let rndHex = hexAlp[Math.floor(Math.random() * hexAlp.length)];
    let rngFact = Math.floor(Math.random() * 2);
    if (rngFact != 0) {
        hexArr[i] = rndHex;
    } else {
        hexArr[i] = rndNumber;
    }
}
let str = hexArr.join("");
let arr = str.split();
console.log(hexArr);
console.log(str);
console.log(arr);

/* Question 3
TODO:   Make random rgb color  */

let rgbArr = Array(3);

for (i = 0; i < 3; i++) {
    let item = Math.floor(Math.random() * 256);
    rgbArr[i] = item;
};

let rgb = rgbArr.join(", ");

console.log(`rgb(${rgb})`)

/* Question 4
TODO:   Sort countries  */
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
    'Kenya'
]

let sortCountries = countries.sort();
console.log(sortCountries);
/* Question 5
TODO:   Countries lenght  */

let lenghtCountries = [];
sortCountries.forEach(element => {
    lenghtCountries.push(element.length);
})
console.log(lenghtCountries);

/* Question 6
TODO:   Countries Make array to array  */

let first3Letter = [];
sortCountries.forEach(e => {
    let b = e.slice(0, 3).toUpperCase();
    first3Letter.push(b);
});
sortCountries.forEach((element, i) => {
    sortCountries[i] = [element, first3Letter[i], lenghtCountries[i]];
})

console.log(sortCountries);

/* Question 7
TODO:   End with ia or not  */

let iaCountries = Array();
sortCountries.forEach((element, i) => {
    if (element[0].includes("land") > 0) {
        console.log(sortCountries[i][0]);
        iaCountries.push(element[0]);
    } else {
        console.log("These are countries  without land.")
    };

});
console.log(iaCountries);

/* Question 8
TODO:   Biggest number of character  */

let iaCountries = Array();
sortCountries.forEach((element, i) => {
    if (element[0].lastIndexOf("ia") > 0) {
        console.log(sortCountries[i][0]);
        iaCountries.push(element[0]);
    } else {
        console.log(element[0] + " : These are countries ends without ia.")
    };

});
console.log(iaCountries);

/* Question 9
TODO:     */

let compare = [1, 2, 3];
sortCountries.forEach(element => {
    if (element[2] > compare[2]) {
        compare = element;
    };
});
console.log(compare[0]);

/* Question 10
TODO:  Only 5 character   */
let fiveChrctr = [];
countries.forEach(element => {
    if (element[0].length == 5) {
        fiveChrctr.push(element[0]);
    }
})
console.log(fiveChrctr);

/* Question 11
TODO:  longest word webtech   */

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
];

let wtArr = webTechs.slice();
let zero = "";
wtArr.forEach(element => {
    if (element.length > zero.length) {
        zero = element;
    };
});
console.log(zero);

/* Question 12
TODO:     */

let lenghtWt = webTechs.slice();

lenghtWt.forEach((element,i) => {
    lenghtWt[i] = [element,element.length];
})

console.log(lenghtWt);

/* Question 13
TODO:     */

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
let mern = [];
mernStack.forEach(element => {
    let b = element.slice(0,1);
    mern.push(b);
});
mern = mern.join("");
console.log(mern);

/* Question 14
TODO:   For or for of  */
for(let i=0;i<webTechs.length;i++){
    console.log(webTechs[i]);
};
/* Question 15
TODO:  reverse without reverse   */
let fruit = ['banana', 'orange', 'mango', 'lemon'] ;
let empArr= [];
fruit.forEach(e => {
    empArr.unshift(e);
});
console.log(fruit);
console.log(empArr);
/* Question 16
TODO:   Print out all  */

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ];

let r = fullStack.join(",");
let fullStackk = r.split(",")

  fullStackk.forEach(element => {
    console.log(element);
  });