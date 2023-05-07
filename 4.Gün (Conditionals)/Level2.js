// Question one 
let grades = parseInt(prompt("Enter your grades."));
switch (true) {
    case grades >= 80:
        console.log("A");
        break;
    case grades >= 70:
        console.log("B");
        break;
    case grades >= 60:
        console.log("C");
        break;
    case grades >= 50:
        console.log("D");
        break;
    default:
        console.log("F");
};
// Question two
let userSelect = prompt("Select month.").toLowerCase();
let autumn = "september, october, november";
let winter = "december, january, february";
let spring = "march, april, may";
let summer = "june, july, august";
if (autumn.includes(userSelect)) {
    console.log("This seasons is Autumn.");
} else if (winter.includes(userSelect)) {
    console.log("This seasons is Winter.");
} else if (spring.includes(userSelect)) {
    console.log("This seasons is Spring.");
} else if (summer.includes(userSelect)) {
    console.log("This seasons is Summer.");
} else {
    console.log("YOU ARE NOT WRITE A NAME OF  MONTH.");
};

// Question three 

let daySelect = prompt("What is day to day?").toLowerCase();
let weekend = ["saturday", "sunday"];

if (weekend.includes(daySelect)) {
    console.log(`${daySelect} is weekend.`);
} else {
    console.log(`${daySelect} is work day.`)
};