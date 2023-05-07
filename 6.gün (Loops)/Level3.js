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

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']
/* Q1
todo: (Copy array) */

let copy = countries.slice();
console.log(copy);

/* Q2
todo: (sort copy) */

copy = copy.sort();
console.log(copy);

/* Q3
todo: (sort web tech mernStack )*/

let sortWeb = webTechs.sort();
let sortMern = mernStack.sort();

/* Q4
todo: (extract and print) */

let emptyArr = [];
copy.forEach((e, i) => {
    if (e.includes("land")) {
        copy.splice(i, 1);
        emptyArr.push(e);
    };
});
console.log(emptyArr);
console.log(copy);
copy = countries.slice();
/* Q5 
todo: (Highest number of character) */

let zero = "";
countries.forEach(e => {
    if (e.length > zero.length) {
        zero = e;
    };
});
console.log(zero);

/* Q6
todo: (Same as Q4) */
/* Q7
todo: (extract 5 or less characters ) */

let emptyArr2 = [];
copy.forEach((e, i) => {
    if (e.length <5) {
        copy.splice(i, 1);
        emptyArr2.push(e);
    };
});
console.log(emptyArr2);
console.log(copy);
copy = countries.slice();

/* Q8
todo: (2 or more word) */

let emptyArr3 = [];
copy.forEach((e, i) => {
    if (e.includes(" ")) {
        copy.splice(i, 1);
        emptyArr3.push(e);
    };
});
console.log(emptyArr3);
console.log(copy);
copy = countries.slice();

/* Q9
todo: (Reverse capitalize and store as aray)*/


