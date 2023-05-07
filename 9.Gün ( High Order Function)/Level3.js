// Q1 sort by name capital populations

// name
function compare(a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
}

countries.sort(compare);


// capital
function capital(a, b) {
    if (a.capital < b.capital) {
        return -1;
    }
    if (a.capital > b.capital) {
        return 1;
    }
    return 0;
}

countries.sort(capital);

// population

let most = countries.sort((a, b) => b.population - a.population);

// Q2 10 most spoken languages

function tenLanguages() {


}



// Q3 most populadted 10 countries 

function topPopulated() {
    let arr = Array(10);
    for (let i = 0; i < 10; i++) {
        arr[i] = most[i];
    }
    return arr;
}


// Q4 statistics

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

let a = ages.sort(),
    count = function () {
        return a.length
    },
    sums = function () {
        return a.reduce((a, b) => a + b, 0)
    },
    min = function () {
        let zero = +Infinity;
        for (let i = 0; i < a.length; i++) {
            if (zero - a[i] > 0) {
                zero = a[i];
            };
            return zero
        }
    },
    max = function () {
        let zero = 0;
        for (let i = 0; i < a.length; i++) {
            if (a[i] > zero) {
                zero = a[i]
            }
        }
        return zero;
    },
    range = function () {
        return max() - min()
    },
    mean = function () {
        let sum = a.reduce((a, b) => a + b, 0);
        let n = count();
        return Math.floor(sum / n);
    },
    median = function () {
        let l = a.length;
        let l2 = Math.floor(l / 2);
        let n = a[l2];
        let l21 = l2 + 1;
        let ss = a[l2] + a[l21];

        if (l % 2 == 0) {
            return ss / 2
        } else {
            return n;
        }
    },
    mode = function () {
        let mod = a.reduce((a, b) => {
            if (b in a) {
                a[b]++
            } else {
                a[b] = 1
            }
            return a
        }, {})

        let obj = { mode: 12, count: 0 };
        let key = Object.keys(mod);
        for (let i = 0; i < key.length; i++) {
            if (mod[key[i]] > obj["count"]) {
                obj["mode"] = key[i];
                obj["count"] = mod[key[i]];
            }
        }

        return obj
    },
    vara = function () {
        return Math.round(a.reduce((a, b) => ((b - mean()) ** 2 / count()) + a, 0))
    },
    std = function () {
        return Math.round(Math.sqrt(vara()))
    },
    freqqq = function () {
        let mod = a.reduce((a, b) => {
            if (b in a) {
                a[b]++
            } else {
                a[b] = 1
            }
            return a
        }, {})
        let key = Object.keys(mod);
        let b = ``;
        for (let i = 0; i < key.length;i++){
            let per = parseFloat(mod[key[i]]*4)
            b += `(${per}, ${key[i]}):`
        }
            return b.split(":")
    };






console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range() // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ', statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ', statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ', statistics.var()) // 17.5
console.log('Frequency Distribution: ', statistics.freqDist()) #[(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]




let obj = { mode: 12, count: 0 };
let key = Object.keys(mod);
for (let i = 0; i < key.length; i++) {
    if (mod[key[i]] > obj["count"]) {
        obj["mode"] = key[i];
        obj["count"] = mod[key[i]];
    }
}