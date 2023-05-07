let challenge = ` 30 Days Of JavaScript `;
let uChallenge = challenge.toUpperCase();
let lChallenge = challenge.toLowerCase();
let slice2to6 = challenge.substr(2, 6);
let neww = challenge.slice(2);
let check = challenge.includes("Script");
let arr = challenge.split();
let arr2 = challenge.split(" ");
let cnvrt = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(",");
let rplc = challenge.replace("JavaScript", "Python");
let whatIs = challenge.charAt(15);
let code = challenge.charCodeAt("J");
let index = challenge.indexOf("a");
let lstIndex = challenge.lastIndexOf("a");
let because = 'You cannot end a sentence with because because because is a conjunction';
let foiBecause = because.indexOf("because");
let loiBecause = because.lastIndexOf("because");
let searchBecause = because.search("because");
let trim = challenge.trim();
let start = challenge.startsWith("");
let end = challenge.endsWith(" ");
let match = challenge.match(/a/gi);
let a = '30 Days of';
let b = 'JavaScript';
let c = a.concat(b);
let rep = challenge.repeat(2);

//    <-----------------------------------------------ÇIKTILAR------------------------------------------------------>

console.log(challenge);
console.log(challenge.length);
console.log(uChallenge);
console.log(lChallenge);
console.log(slice2to6);
console.log(neww);
console.log(check);
console.log(arr);
console.log(arr2);
console.log(cnvrt);
console.log(rplc);
console.log(`Character at index 15 in "30 Days Of JavaScript" is: "${whatIs}"`);
console.log(code);
console.log(index);
console.log(lstIndex);
console.log("<---------------------------BECAUSE--------------------->")
console.log(foiBecause);
console.log(loiBecause);
console.log("<---------------------------BECAUSE && SEARCH--------------------->")
console.log(searchBecause);
console.log(trim);
console.log(start);
console.log(end);
console.log(match);
console.log(c);
console.log(`1: ${rep} :2`);
console.log();