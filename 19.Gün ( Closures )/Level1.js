/* Q1
todo(Create a closure which has one inner function) */

function closure(){
    let date = new Date();
    function year(){
        let year = date.getFullYear();
        return year;
    };
    return year;
};

let inner = closure();

console.log(inner())



