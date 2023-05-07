// Question 1
let emptyArray = Array(8);
// Question 2
let arrayFive = [1, 2, 3, 4, 5];
// Question 3
let arrayLenght = arrayFive.length;
console.log(arrayLenght);
// Question 4
let firstItem = arrayFive[0],
    middleItem = arrayFive[Math.ceil(arrayLenght / 2)],
    lastItem = arrayFive[arrayLenght - 1];
console.log(`first ${firstItem} ; middle ${middleItem} ; last ${lastItem}  `);
// Question 5
let mixedDataTypes = [1, "se", [], {}, false, null];
console.log(mixedDataTypes.length);
// Question 6
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// Question 7
console.log(itCompanies);
// Question 8
console.log(itCompanies.length);
// Question 9
let arrayLenghtC = itCompanies.length;
firstItemC = itCompanies[0],
    middleItemC = itCompanies[Math.ceil(arrayLenghtC / 2)],
    lastItemC = itCompanies[arrayLenghtC - 1];
console.log(`first ${firstItemC} ; middle ${middleItemC} ; last ${lastItemC}  `);
// Question 10
function write(item) {
    console.log(item)
};
itCompanies.forEach(write);
// Question 11
function writeb(item) {
    console.log(item.toUpperCase());
};
itCompanies.forEach(writeb);
// Question 12
let popC = itCompanies.pop();
let someWrite = itCompanies.join(",");
console.log(`${someWrite} and ${popC} are big IT companies.`);
itCompanies.push(popC);
console.log(itCompanies);
// Question 13
let searchForCompanies = prompt("Enter conmpanies Name");
a = searchForCompanies.slice(0, 1).toUpperCase();
b = searchForCompanies.slice(1,).toLowerCase();
get = a + b;
console.log(get);

// Question 14
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
let a = itCompanies.length;
itCompanies.forEach(element => {
    if (element.match(/o/gi)) {
        let a = element.match(/o/gi);
        let b = a.length;
        if (b > 1) {
            console.log(element);
        }
    }
});

// Question 15
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
let a = itCompanies.sort();
console.log(a);
// Question 16
let b = itCompanies.reverse();
console.log(b);
// Question 17
let slice = itCompanies.slice(0, 3);
console.log(slice);
// Question 18
let endSlice = itCompanies.slice(4);
console.log(endSlice);
// Question 19
let endSlices = itCompanies.slice(4, 5);
console.log(endSlices);
// Question 20
let arrayLenghtC = itCompanies.length;
let middleItemC = itCompanies[Math.ceil(arrayLenghtC / 2)];
console.log(middleItemC);
// Question 21
itCompanies.splice(middleItemC, 1);
console.log(itCompanies);
// Question 22
itCompanies.pop();

// Question 23
itCompanies.splice(0);
console.log(itCompanies);