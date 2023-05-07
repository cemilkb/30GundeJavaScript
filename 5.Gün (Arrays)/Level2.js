// Quesntion 2
let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let textArr = text.split(" ");
console.log(textArr);
console.log(textArr.lenght);
// Quesntion 3
let shoppingCart = ["Milk", "Coffee", "Tea","Honey"];
let sC = shoppingCart.slice();
sC [2] = "Green tea" ; 
sC.forEach((element, i) => {
    element = element.toLowerCase();
    sC[i] = element
});

if(!(sC.includes("Meat"))){
    sC.unshift("meat");
};

if(!(sC.includes("Sugar"))){
    sC.push("sugar");
};
let allergic = prompt("Are your allergic ?")
if(allergic == "yes"){
    sC.splice(4,1);
} else{
    console.log("ok")
};

console.log(sC);
console.log(shoppingCart);

// Quesntion 4
if (country.includes("ethopia")){
    console.log("ETHOPIA");
} else {
    country.push("ethopia");
}
console.log(country);

// Quesntion 5
if (country.includes("sass")){
    console.log("Sass is a Css preprocess");
} else {
    country.push("sass");
}
console.log(country);

// Quesntion 6
let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

