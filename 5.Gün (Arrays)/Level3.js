const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let sortAges = ages.sort();
let min = sortAges[0];
let max = sortAges[sortAges.length-1];
// median
let lenghtOfAges = ages.length;
if (lenghtOfAges % 2 == 1) {
    let median = sortAges[Math.ceil(lenghtOfAges / 2)];
    console.log(median)
} else {
    let medianX = sortAges[lenghtOfAges / 2];
    let medianY = sortAges[(lenghtOfAges / 2) + 1];
    let median = (medianX + medianY) / 2;
    console.log(median)
} 

// find the average
let avrageAgeSum = 0 ;
console.log(sortAges)
sortAges.forEach((element, i) => {
avrageAgeSum += element;
console.log(`${avrageAgeSum} doğruluk ${i}`);
});
let avrageAge = avrageAgeSum/lenghtOfAges;
console.log(avrageAge);

// FİND RANGE
let range = max-min;
console.log(range)
// compare 
let minCompare = Math.round(Math.abs(avrageAge-min));
let maxCompare = Math.round(Math.abs(avrageAge-max));
console.log(`min compare with avrg ${minCompare} max compare with avtg ${maxCompare}`)

// COUNTRY SECTION
const countriess = [
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
// SLICE
  let newCountries = countriess.slice(0, 10);
// FIND MIDDLE COUNTRIEShon
let ncl = newCountries.length;
let halfNcl = Math.ceil(ncl/2);
if (ncl%2 == 0){
console.log(`${newCountries[halfNcl]} and ${newCountries[halfNcl+1]}`);
}else{
    console.log(newCountries[halfNcl]);
}
// Divide by to array an array 
let testArr = [1,2,3,4,5,6,7,8,9,10,11]
let length = testArr.length;
let a = length%2 ;
let middle = Math.ceil(length/2);
if (a == 0){
 let new1 = testArr.splice(0,middle),
 new2 = testArr.splice(0);
 console.log(new1);
 console.log(new2);
} else{
testArr.unshift("New Item")
    let new1 = testArr.splice(0,middle),
    new2 = testArr.splice(0);
    console.log(new1);
    console.log(new2);
}

  console.log(testArr);
