// Questin 1
let something = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let count = something.match(/love/g).length;
// Questin 2
let because = 'You cannot end a sentence with because because because is a conjunction';
let becauseCount = because.match(/because/g).length
// Questin 3
let sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let sentence0 = sentence.replace(/%/g, "");
let sentence1 = sentence0.replace(/@/g, "");
let sentence2 = sentence1.replace(/&/g, "");
let sentence3 = sentence2.replace(/#/g, "");
let sentence4 = sentence3.replace(/\$/g, "");
console.log(sentence4);
// Questin 4
let salaryText = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let salaryNumber  = salaryText.match(/\d+/g);
let salary = parseInt(salaryNumber[0] ) + parseInt(salaryNumber[1]) + parseInt(salaryNumber[2]) ;

//    <-----------------------------------------------ÇIKTILAR------------------------------------------------------>

//write 1
console.log(count);
//write 2
console.log(becauseCount);
//write 3
console.log(sentence4);
//write 4
console.log(salary);