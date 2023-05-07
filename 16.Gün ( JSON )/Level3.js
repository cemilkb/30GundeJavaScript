/* Q1
todo: (Parse the txt JSON to object.) */

let parseTxt = JSON.parse(txt);
console.log(parseTxt);

/* Q2
todo: (Find the user who has many skills from the variable stored in txt.) */

let b = { ...parseTxt };
let keys = Object.keys(parseTxt);
let zero = 0;
let most;
keys.forEach(e=>{
    if(b[e].skills.length > zero){
        most = e;
        zero = b[e].skills.length;
    }
})
console.log(most)