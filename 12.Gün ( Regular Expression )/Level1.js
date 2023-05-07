/* Q1
todo: (Sallary calculation) */
let str = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";

function calculate(a){
let income = a.match(/\d+/g),
income2 = income.map(e => e = parseInt(e));
return income2.reduce((a,b)=> a+b,0)
};
console.log(calculate(str))

/* Q2
todo: (Distance) */

let points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8'];

function distance(a){
  let arr = a.map(e => e = parseInt(e))
  arr2 = arr.sort((a, b) => a-b),
  first = arr2[0],
  last = arr2[arr.length-1];
  return last - first;
}

console.log(distance(points));

/*
todo: (Validation) */


function is_valid_variable(a){
  if(/^[^-]+$/gi.test(a) && /^[^\d]/gi.test(a)){
    return true
  }else{
    return false
  }
}






console.log(is_valid_variable('first_name')) //# True
console.log(is_valid_variable('first-name')) //# False
console.log(is_valid_variable('firstname')) //# False
console.log(is_valid_variable('1first_name') )//# False
console.log(is_valid_variable('firstname')) //# True

