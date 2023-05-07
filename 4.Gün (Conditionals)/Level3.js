



let day30 = ["april", "june", "september", "november"];
let day31 = "january, march, may, july, august, october, december";
let feb = "february";
let userChoice = prompt("Please enter a valid month name.").toLowerCase();





if (day31.includes(userChoice)) {
    console.log(`${userChoice} has 31 days.`);
}
else if (day30.includes(userChoice)) {
    console.log(`${userChoice} has 30 days.`);
}
else if (feb.includes(userChoice)) {
    console.log(`${userChoice} has 29 or 28 days.`);
}
else {
    for (let i = 0; i < 2; i++ ){
        let a = prompt("Please enter a valid month name.").toLowerCase();
        if (day31.includes(a)) {
            console.log(`${a} has 31 days.`);
            i = 3;
        }
        else if (day30.includes(a)) {
            console.log(`${a} has 30 days.`);
            i = 3;
        }
        else if (feb.includes(a)) {
            console.log(`${a} has 29 or 28 days.`);
            i = 3;
        }else{
            i = 0;
        }
    }
};


