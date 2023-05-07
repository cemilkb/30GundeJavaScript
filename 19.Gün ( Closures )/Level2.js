/* Q1
todo: (Create a closure which has three inner functions) */

function three(){
    function cat(){return "Meoooww"};
    function dog(){return "WOOOF"};
    function bee(){return "BZZZZZZZZZZZZZZZZ!!!"}

    return{
        cat: cat(),
        dog: dog(),
        bee
    }
}

let animal = three();

console.log(animal.cat)
console.log(animal.dog)
console.log(animal.bee())