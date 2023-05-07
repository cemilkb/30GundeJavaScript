const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

/* Q1 
!  dExplain the difference between forEach, map, filter, and reduce.
*/

console.log(`Foreach: tüm seri elemanlarını teker teker alır ve işleme tabi tutar diziyi değiştirmez.
Map: Foreach ile aynı şekilde çalışır sadece diziyi değişterme hükmüne de sahip.
Filter: İçeri yazılan koşula göre yeni bir array oluştururu.  
Reduce: Başlattığın değerden belirttiğinhe kadar toplar  `)


//Q2  dDefine a callback function before you use it in forEach, map, filter or reduce.

function callback(n) {
    return n ** 2
}
function cube(n) {
    return callback(n) * n
}

//Q3  dUse forEach to console.log each country in the countries array.

countries.forEach(e => {
    console.log(e);
});

//Q4  Use forEach to console.log each name in the names array.

names.forEach(e => { console.log(e) });

//Q5  Use forEach to console.log each number in the numbers array.

numbers.forEach(num => { console.log(num) })

//Q6  Use map to create a new array by changing each country to uppercase in the countries array.

let uCountries = [...countries];
uCountries.map(e => {
    let a = e.slice(0, 1).toLowerCase();
    let b = e.slice(1).toUpperCase();
    let c = a + b;
    e = c;
    console.log(c)

})

//Q7  Use map to create an array of countries length from countries array.


counter = 0;
countries.map(e => {
    counter++
})
let empArr = Array(counter)

//Q8  Use map to create a new array by changing each number to square in the numbers array

let newNumber = numbers.map(e => { e ** 2 });

//Q9  Use map to change to each name to uppercase in the names array

function up(a) {
    let b = a.slice(0, 1).toLowerCase();
    let c = a.slice(1).toUpperCase();
    a = b + c;
    return a
}

let lNames = names.map(e =>
    up(e)
)

//Q10  Use map to map the products array to its corresponding prices.

let price = products.map(e => e["price"]);

//Q11 Use filter to filter out countries containing land.

let land = countries.filter(e => e.includes("land"));

//Q12  Use filter to filter out countries having six character.

let six = countries.filter(e => e.length == 6);

//Q13  Use filter to filter out countries containing six letters and more in the country array.

let sixOrMore = countries.filter(e => e.length >= 6);

/* Q14  Use filter to filter out country start with 'E';
! INDEX OF LA BAKILICAK BÜYÜK İHİTMAL
todo: e.indexOf("E") == 0
*/

let startsWithE = countries.filter(e => e.includes("E"));

//Q15  Use filter to filter out only prices with values.

let priceValue = price.filter(p => p > 0);

//Q16  Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

function str(arr) {

    let strArr = arr.filter(e => typeof (e) == "string")
    return strArr;
};

//Q17  Use reduce to sum all the numbers in the numbers array.

numbers.reduce((a,b) => a+b,0);
 
/* Q18  Use reduce to concatenate all the countries and to produce this sentence
: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
! ---------------------------------------------------------- BURAYA BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK ----------------------------------------------------------
*/



//Q19  Explain the difference between some and every

console.log(`Some: Sadece bir değer dahi sağlasa kabul edilir.
Every: tüm değerlerin şartları sağlaması gerekli.`);
//Q20  Use some to check if some names' length greater than seven in names array

names.some(e => e.length > 7);

//Q21  Use every to check if all the countries contain the word land

countries.every(e => e.includes("land"));

//Q22  Explain the difference between find and findIndex.

console.log(`Find: Aradağımız şey var ise onu alıp getirir
FindIndex: Aradığımız şeyin index numarasını bize gösterir`)

//Q23  Use find to find the first country containing only six letters in the countries array

countries.find(e => e.length == 6);

//Q24  Use findIndex to find the position of the first country containing only six letters in the countries array

countries.findIndex(e => e.length == 6);

//Q25  Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

countries.findIndex(e => e == "Norway");

//Q26  Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

countries.findIndex(e => e == "Russia");
