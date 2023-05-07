/* Q1
 todo: (Read the countries API using fetch and print the name of country, capital, languages, population and area.) */


const countriesAPI = 'https://restcountries.com/v2/all';

async function get() {
    let response = await fetch(countriesAPI),
        data = await response.json();
    data.forEach(e => {
        console.log(`-!-
Name: ${e.name}
Capital: ${e.capital}
Languages: ${e.languages[0].name}
Population: ${e.population}
Area: ${e.area}
-!-`)

    });
 
}

 //get()