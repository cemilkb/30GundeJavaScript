const countries = ['Finlandf', 'Swedens', 'Denmarkd', 'Norwayn', 'CceLand',1,2,3,4,5,6,7,8,9,11,12,13,14,15,20]
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
todo (Find the total price)
*/

let sum = products.map(e => e["price"]).filter(e => e > 0).reduce((a, b) => a + b, 0);

/* Q2
todo (Sum with only reduce)   
*/

let sumReduce = products.reduce((a, b) => {
    let key = b["price"];
    if (typeof (key) == 'number') {
        a + b["price"]
    }


}, 0);

/* Q3
todo ( Common pattern arr)  
*/

function catagorizeCountries(arr) {
    let land = arr.filter(e => e.includes("Land"));
    let ia = arr.filter(e => e.includes("ia"));
    let island = arr.filter(e => e.includes("island"));
    let stan = arr.filter(e => e.includes("stan"));
    return { Land: land, Ia: ia, Island: island, San: stan };
}

/* Q4
todo (Letter number of time)
*/

function lott(a) {
    let get;

    for (let i = 0; i < a.length; i++) {
        let slice = a[i].slice(0, 1).toLowerCase(),
            after = a[i].slice(1),
            sum = slice + after,
            reg = `/${slice}/gi`,
            match = sum.match(/\${slice}/gi);
        console.log(match)
    }

}

lott(countries)

/* Q5
todo (First ten countries)
*/

function tenCountries(arr) {
    let ten = Array(10)
    for (let i = 0; i < 10; i++) {
        ten[i] = arr[i];
    }
    return ten
};

tenCountriess(countries)
/* Q6
todo (Last 10 countries)
*/

function tenCountriess(arr) {
    let ten = Array(10),
    last = arr.length-10;

    for (let i = 0; i < 10; i++) {
        ten[i] = arr[last+i]
    };
    return ten
};
tenCountriess(countries);
/* Q7
todo 
*/