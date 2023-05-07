/* Q1
todo: (Look again) */

let personAccount = {
    fisrtName: "Cemil",
    lastName: "Köybaşı",
    incomes: 1200,
    expenses: 200,
    addIncome: function (n) {
        this.incomes += n;
    },
    addExpense: function (n) {
        this.expenses += n;
    },

}

/*
! USE THİS ARRAYS FOR Q2-Q3 AND Q4
*/
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]

/* Q2
todo: (Sgin up if it is not) */
let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let years = date.getFullYear();
let hours = date.getHours();
let munite = date.getMinutes();
let userId = prompt("Your Id:");
let names = prompt("Your names:");
let maill = prompt("Your mail:");
let pass = prompt("Your password");
let newUsers = {
    _id: userId,
    username: names,
    email: maill,
    password: pass,
    createdAt: `${day}/${month}/${years} ${hours}:${munite}`,
    isLoggedIn: true
}


for (let i = 0; i < users.length; i++) {


    if (users[i]["_id"].includes(userId) || users[i]["username"].includes(names) || users[i]["email"].includes(maill)) {
        console.log("You'r allready have a account.")

    } else if (i == users.length - 1) {

        users.push(newUsers);
    }
}



console.log(newUsers);
console.log(users);





/* Q3
todo: (Rate Function) */

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]


function rate() {

    for (let i = 0; i < products.length; i++) {
        let name = products[i]["name"];
        let rate = products[i]["ratings"];
        let rn;
        if (rate.length > 0) {
            for (let j = 0; j < rate.length; j++) {
                let number = rate[j]["rate"];
                let rateName = rate[j]["userId"];
                rn = `User Name:"${rateName}" Rate: ${number}`
            }
        } else {
            rn = "Don't have any rate."
        }
        let productsRate = `${name}: ${rn}`
        console.log(productsRate);

    }
}

function avrgRate() {

    for (let i = 0; i < products.length; i++) {
        let name = products[i]["name"];
        let rate = products[i]["ratings"];
        let number = 0;
        if (rate.length > 0) {
            for (let j = 0; j < rate.length; j++) {
                number += rate[j]["rate"]
            }
        } else {
            number = "Don't have a any rate."
        }
        let productsRate = `${name}: ${number}`
        console.log(productsRate);

    }
}


avrgRate()

/* Q4
todo: () */
const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]


function like() {
    let choose = prompt("Wanna like or dislike ?");
    let pick = prompt("Wich one ?");
    let who = prompt("Who are you ?");
    if (choose == "like") {
        products[pick]["likes"].push(who);


    } else {
        products[pick]["likes"].pop();
    }
}



