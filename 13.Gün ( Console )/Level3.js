/*
todo: (CHECK TİME WIHLE FOR FOREACH FOR OF)*/

// For
console.time("For");
for (let i = 0; i < countries.length; i++) {

};
console.timeEnd("For");

// While
console.time("While:");
let x = 0;
while (x < countries.length) {

    x++
};
console.timeEnd("While:");

// For Of
console.time("For Of:");
for (let x of countries){

}
console.timeEnd("For Of:");

// ForEach
console.time("ForEach:");
countries.forEach(element => {
    
});
console.timeEnd("ForEach:");