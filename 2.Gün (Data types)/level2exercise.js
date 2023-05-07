let par1 = `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`;
let par2 = `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`;
// 3'rd Question
let a = "10";
a = parseInt(a);
let b = 10 ;
let c = b === a;
// 4'th Question
let float = parseFloat(9.8);
let matFunction = Math.round(float);
let ten = 10 ;
let equal = matFunction === ten ;
// 5'th Question
let pyt = "python";
let alPyt = pyt.includes("on");
let jar = "jargon";
let alJar = jar.includes("on");
let denklem = alJar === alPyt ;
// 6' th Question
let sentence = "I hope this course is not full of jargon.";
let search = sentence.includes("jargon");
// 7' th Question
let randomNumber = Math.floor(Math.random()*101);
// 8' th Question
let fifty = Math.ceil(Math.random()*51+50);
// 9' th Question
let thousand = Math.floor(Math.random()*206);
// 10' th Question
let js = "JavaScript";
let getJs = js.charAt(Math.floor(Math.random()*10))
// 11' th Question
let escape = `1 1 1 1 1 
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125`;
// 12' th Question
let subject = `'You cannot end a sentence with because because because is a conjunction'`;
let slice = subject.slice(32, 55);


//    <-----------------------------------------------ÇIKTILAR------------------------------------------------------>

console.log(par1);
console.log(par2);
console.log(`'10' is equal to 10 (${c}) `);
console.log(`We can use Math command and make equal 9.8 to 10. Is it (${equal})`);
console.log(`Both of them include a "on" = (${denklem})`);
console.log(`Is this sentence include a "jargon" = (${search}) `);
console.log("Question 7 = " + randomNumber);
console.log(`Question 8 = ${fifty}`);
console.log(`Question 9 = ${thousand}`);
console.log(getJs);
console.log(escape);
console.log(slice);
