/* Q1
todo: (Read the cats api and find the average weight of cat in metric unit.) */

async function metric() {
    let response = await fetch(catsAPI),
        data = await response.json(),
        zero = 0;

    data.forEach(e => {

        let breedsWeight = e.weight.metric.split("-"),
            sum = parseInt(breedsWeight[0]) + parseInt(breedsWeight[1]),
            sum2 = sum / 2;
        zero += sum2;

    })

    console.log(zero / 65);
}

//metric()

/* Q2
todo: (Read the countries api and find out the 10 largest countries) */

async function largestCountries() {
    let response = await fetch(countriesAPI),
        data = await response.json(),
        sorted = data.sort((a, b) => {
            return b.area - a.area
        });

    for (let i = 0; i < 10; i++) {
        console.log(sorted[i].name)
    }

}


//largestCountries();

/* Q3
todo: (Read the countries api and count total number of languages in the world used as officials.) */

async function total() {
    let response = await fetch(countriesAPI);
    let data = await response.json();
    let arr = [];

    data.forEach(e => {
        let lng = e.languages
        let length = lng.length;
        for (let i = 0; i < length; i++) {
            arr.push(lng[i].name)
        }
    })

    let set = new Set(arr);
    console.log([...set].length);

}

total()



[0,1,2,3]
[1,2,3,4]