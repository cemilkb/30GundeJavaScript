// Q1 create an empty set

let set = new Set();

// Q2 Create a set containing 0 to 10 using loop

function zeroTen() {
    let set = new Set();
    for (let i = 0; i < 11; i++) {
        set.add(i)
    }
    return set
}

// Q3 Remove an element from a set
function deleteElement() {
    let set = new Set();
    for (let i = 0; i < 11; i++) {
        set.add(i)
    }
    set.delete(5);
    return set
}

// Q4 Clear a set

function clearSet() {
    let set = new Set();
    for (let i = 0; i < 11; i++) {
        set.add(i)
    }
    set.clear();
    return set
}

// Q5 Create a set of 5 string elements from array

function fiveString() {
    let arr = ["a", "aa", "aaa", "aaaa", "aaaaa"];
    let five = arr.filter(str => str.length > 4);
    let set = new Set(five);
    return set;
}

// Q6 Create a map of countries and number of characters of a country


function createMap() {
    const countries = ['Finland', 'Sweden', 'Norway'];
    const countriesMap = new Map()
    countries.forEach(e => {
        let l = e.length;
        countriesMap.set(e,l)
    });
    return countriesMap;
}
