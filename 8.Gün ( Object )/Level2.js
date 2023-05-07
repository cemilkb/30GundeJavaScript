const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

let keys = Object.keys(users),
    lenght = keys.lenght;


/* Q1
todo: (Who has more skills)
 */

let zero = 0;
let most = "boss";

for (let i = 0; i < keys.length; i++) {

    if (users[keys[i]]["skills"].length > zero) {
        zero = users[keys[i]]["skills"].length;
        most = keys[i];
    }


};

console.log(most);

/* Q2
todo: (count)
 */
let counter = 0;

for (let i = 0; i < keys.length; i++) {
    let online = users[keys[i]]["isLoggedIn"],
        point = users[keys[i]]["points"];
    if (online && point == 50) {
        counter++
    }
}

console.log(counter);

/* Q3
todo: (MERN developer )
 */
let mernArr = [];


for (let i = 0; i < keys.length; i++) {
    let a = users[keys[i]]["skills"];
    if (a.includes("MongoDB") && a.includes("Express") && a.includes("React") && a.includes("Node")) {
        mernArr.push(keys[i]);
    }
};
let mern = mernArr.join(",");

console.log(mern);

/* Q4
todo: (Copy object and add me)
 */

let copy = Object.assign({}, users);

copy.Cemil = {
    email: 'cemil_koybasi@hotmail.com',
    skilss: ['HTML', 'CSS', 'JavaScript'],
    age: 25,
    isLoggedIn: true,
    points: 50
}

console.log(copy);

/* Q5
todo: (get all keys )
 */

let allKeys = Object.keys(copy);

console.log(allKeys);

/* Q6
todo: (All values)
 */

let allVales = Object.values(copy);

console.log(allVales);

/* Q
todo: (Print all)
 */

const countries = {
    names: "Turkey",
    capital: "İstanbul",
    population: 7000000 ,
    languages: "Turkhis"
}

let printt = `NAME:${countries.names}
Capital: ${countries["capital"]}
Populations: ${countries.population}
Languges: ${countries.languages}`;
 
console.log(printt);