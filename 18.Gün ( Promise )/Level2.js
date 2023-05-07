/* Q1
todo: (Print out all the cat names in to catNames variable.) */

const catsAPI = 'https://api.thecatapi.com/v1/breeds';


async function catNames(){
    let response = await fetch(catsAPI),
    data = await response.json();
    
    data.forEach(e=> {
        console.log(`Name:${e.name} Weight: ${e.weight.metric}`)
    })
    
    console.log(data);

}

 //catNames();


